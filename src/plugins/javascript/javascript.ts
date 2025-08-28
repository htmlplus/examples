import generator from '@babel/generator';
import merge from 'deepmerge';

import type { IContext, IPlugin } from '@/types';
import { type IImportResolverFunction, Resolver, format, importResolver, write } from '@/utils';

export interface IJavascriptOptions {
	destination: (context: IContext) => string;
	importResolver: IImportResolverFunction;
}

export const javascript: IPlugin<IJavascriptOptions> = (options) => {
	const name = 'javascript';

	const run = async (context: IContext) => {
		if (context.skip) return;

		const destination = options.destination(context);

		const resolver = new Resolver(context, {
			script: {
				arrowFunctionExpression: {
					constant() {}
				},
				constant() {},
				element: {
					method: {
						addEventListener: {
							arrowFunctionExpression: {
								blockStatement() {},
								callExpression() {}
							},
							callExpression() {},
							functionExpression() {},
							identifier() {}
						}
					},
					property: {
						constant() {},
						state: {
							define() {},
							getter() {},
							setter() {}
						}
					},
					reference() {}
				},
				final() {},
				functionDeclaration() {},
				functionExpression: {
					constant() {}
				},
				unresolved() {},
				variable: {
					define() {},
					getter() {},
					setter() {}
				}
			},
			template: {
				element: {
					attribute: {
						class() {},
						default() {},
						id() {},
						style() {}
					},
					default() {}
				},
				fragment() {}
			}
		});

		resolver.execute();

		const config = await (async () => {
			if (!context.configAST) return;

			importResolver(resolver.config, options.importResolver);

			const { code } = generator(resolver.config);

			const formatted = await format(code, { parser: 'babel' });

			return formatted;
		})();

		const script = await (async () => {
			if (!context.scriptAST) return;

			importResolver(resolver.script, options.importResolver);

			const { code } = generator(resolver.script);

			const formatted = await format(code, { parser: 'babel' });

			return formatted;
		})();

		const template = await (async () => {
			if (!context.templateAST) return;

			const { code } = generator(resolver.template, {});

			const cleaned = code.replace(/<>|<\/>/g, '');

			const formatted = await format(cleaned, { parser: 'html' });

			return formatted;
		})();

		const model = merge(context, {
			configContent: config,
			scriptContent: script,
			templateContent: template
		});

		const patterns = ['templates/**/*.*'];

		if (!context.configAST) {
			patterns.push('!templates/config.js.*');
		}

		if (!context.styleContent) {
			patterns.push('!templates/style.css.*');
		}

		await write(__dirname, patterns, destination)(model);

		context.output[name] = {
			config,
			script,
			style: context.styleContent,
			template
		};
	};

	return { name, run };
};
