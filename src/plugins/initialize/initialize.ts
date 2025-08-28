import fs from 'node:fs';
import path from 'node:path';

import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';

import type { IContext, IContextDependency, IPlugin } from '@/types';
import { format } from '@/utils';

const turndownService = new TurndownService();

export interface IInitializeOptions {
	cache: string;
	dependencyResolver: (source: string) => IContextDependency;
	getTitle: (context: IContext) => string;
}

export const initialize: IPlugin<IInitializeOptions> = (options) => {
	const name = 'initialize';

	const cache = fs.existsSync(options.cache)
		? JSON.parse(fs.readFileSync(options.cache, 'utf8'))
		: {};

	const run = async (context: IContext) => {
		context.output = {};

		context.directoryPath = path.dirname(context.filePath);

		context.directoryName = path.basename(context.directoryPath);

		context.fileContent = fs.readFileSync(context.filePath, 'utf8');

		context.fileExtension = path.extname(context.filePath);

		context.fileName = path.basename(context.filePath, context.fileExtension);

		context.fileUpdatedTime = fs.statSync(context.filePath).mtime.toISOString();

		context.title = options.getTitle(context) || '';

		if (cache[context.filePath] === context.fileUpdatedTime) {
			context.skip = true;
			return;
		}

		const $ = cheerio.load(context.fileContent);

		context.settingsDock = !!$('body[dock]').length;

		context.settingsIsolate = !!$('body[isolate]').length;

		context.settingsRTL = !!$('body[rtl]').length;

		(() => {
			const elements = $('[data-doc]');

			elements.removeAttr('data-doc');

			const content = elements
				.map((_index, element) => $.html(element).trim())
				.get()
				.join('\n');

			elements.remove();

			if (!content) return;

			context.description = turndownService.turndown(content);
		})();

		await (async () => {
			const styles = $('style');

			const content = styles
				.map((_index, element) => $(element).html()?.trim())
				.get()
				.join('\n');

			styles.remove();

			if (!content) return;

			context.styleContent = await format(content, { parser: 'css' });
		})();

		(() => {
			const script = $('script')
				.filter((_index, element) => !!$(element).html()?.includes('setConfig'))
				.first();

			const content = script.html();

			script.remove();

			if (!content) return;

			context.configAST = parse(content, { sourceType: 'module' });
		})();

		(() => {
			const script = $('script').first();

			const content = script.html();

			script.remove();

			if (!content) return;

			context.scriptAST = parse(content, { sourceType: 'module' });
		})();

		(() => {
			const body = $('body');

			let content = body.html();

			body.remove();

			if (!content) return;

			content = content
				.replace(
					/<(\s*(img|input|br|hr|meta|link|area|base|col|embed|source|track|wbr)\b[^>]*?)(?<!\/)>/g,
					'<$1 />'
				)
				.replace(/\b([a-zA-Z_][\w-]*)=""/g, '$1')
				.replaceAll('&amp;', '&');

			const input = `<>${content}</>`;

			const ast = parse(input, {
				sourceType: 'module',
				plugins: ['jsx']
			});

			const fragment = (ast.program.body.at(0) as any).expression;

			const children = fragment.children.filter((child: any) => {
				return child.type !== 'JSXText' || child.value.trim();
			});

			const element = children.length === 1 ? children.at(0) : fragment;

			ast.program.body = [element];

			context.templateAST = ast;

			context.templateWrapped = element === fragment;
		})();

		context.dependencies = (() => {
			if (!context.scriptAST) return [];

			const dependencies: IContextDependency[] = [];

			const ImportDeclaration = (path: any) => {
				const defaults = {
					name: path.node.source.value,
					version: 'latest'
				};

				const dependency = options.dependencyResolver(path.node.source.value) || defaults;

				const has = dependencies.some((item) => item.name === dependency.name);

				if (has) return;

				dependencies.push(dependency);
			};

			if (context.configAST) {
				traverse(context.configAST, { ImportDeclaration });
			}

			if (context.scriptAST) {
				traverse(context.scriptAST, { ImportDeclaration });
			}

			return dependencies.sort();
		})();
	};

	const finish = async (contexts: IContext[]) => {
		for (const context of contexts) {
			cache[context.filePath] = context.fileUpdatedTime;
		}

		fs.writeFileSync(options.cache, JSON.stringify(cache));
	};

	return { name, run, finish };
};
