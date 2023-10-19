import glob from 'fast-glob';
import handlebars from 'handlebars';
import fs from 'node:fs';
import path from 'node:path';

import { format } from './format';

export const write =
  (root: string, source: string | string[], destination: string) => async (context: any) => {
    const files = glob.sync(source, { cwd: root });

    let removes = glob.sync(`**/*`, {
      onlyFiles: false,
      cwd: path.join(process.cwd(), destination)
    });

    for (const file of files) {
      removes = removes.filter((remove) => {
        if (path.extname(remove)) {
          return !file.endsWith(`${remove}.hbs`);
        } else {
          return !path.dirname(file).endsWith(remove);
        }
      });

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

      const raw = fs.readFileSync(from, 'utf8');

      const template = handlebars.compile(raw)(context);

      if (!fs.existsSync(directory)) fs.mkdirSync(directory, { recursive: true });

      const formated = await format(template, {
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
        if (fs.readFileSync(to, 'utf8') == formated) continue;
      } catch { }

      fs.writeFileSync(to, formated, 'utf8');
    }

    for (const remove of removes) {
      fs.rmSync(path.join(destination, remove), { recursive: true, force: true });
    }
  };
