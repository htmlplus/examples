import fs from 'node:fs';
import path from 'node:path';

import { glob } from 'glob';
import handlebars from 'handlebars';

import { format } from './format';

export const write =
	(root: string, source: string | string[], destination: string) => async (context: any) => {
		const pattern = [source].flat();

		const ignore = pattern
			.filter((source) => source.startsWith('!'))
			.map((source) => source.slice(1));

		const files = glob.sync(pattern, { cwd: root, ignore });

		let removes = glob.sync(`**/*`, {
			// TODO
			// onlyFiles: false,
			cwd: path.join(process.cwd(), destination)
		});

		for (const file of files) {
			removes = removes.filter(
				(remove) =>
					!file.replace('.hbs', '').endsWith(remove) && !path.dirname(file).endsWith(remove)
			);

			const from = path.resolve(root, file);

			const to = path.join(
				destination,
				path
					.normalize(file)
					.split(path.sep)
					.slice(1)
					.map((section) => handlebars.compile(section)(context))
					.join(path.sep)
					.replace('_.', '.')
					.replace('.hbs', '')
			);

			const directory = path.dirname(to);

			if (!fs.existsSync(directory)) fs.mkdirSync(directory, { recursive: true });

			if (!from.endsWith('.hbs')) {
				fs.copyFileSync(from, to);
				continue;
			}

			const raw = fs.readFileSync(from, 'utf8');

			const template = handlebars.compile(raw)(context);

			const formatted = await format(template, {
				parser: (() => {
					const extension = path.extname(to).replace('.', '');
					switch (extension) {
						case 'js':
						case 'jsx':
							return 'babel';
						case 'ts':
							return 'typescript';
						default:
							return extension;
					}
				})()
			});

			try {
				if (fs.readFileSync(to, 'utf8') === formatted) continue;
			} catch {}

			fs.writeFileSync(to, formatted, 'utf8');
		}

		for (const remove of removes) {
			fs.rmSync(path.join(destination, remove), { recursive: true, force: true });
		}
	};
