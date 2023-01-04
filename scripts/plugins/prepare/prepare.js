import { pascalCase } from 'change-case';

import { setOutput } from '../../utils.js';

export const prepare = () => {
  const name = 'prepare';
  const run = (context) => {
    const regex = /```\w+\s\[\w+(:\w+)?\]\s[\S\s]*?```/g;

    const snippets = [];

    context.fileContent?.match(regex)?.forEach((snippet) => {
      try {
        const lines = snippet.split('\n');

        const first = lines[0];

        const key = first
          ?.match(/\[\w+(:\w+)?\]/)
          ?.shift()
          ?.replace('[', '')
          ?.replace(']', '');

        const type = first
          ?.match(/```\w+/)
          ?.pop()
          ?.replace('```', '');

        const dock = !!first
          ?.match(/\[dock]/)
          ?.shift()
          ?.replace('[', '')
          ?.replace(']', '');

        const rtl = !!first
          ?.match(/\[rtl]/)
          ?.shift()
          ?.replace('[', '')
          ?.replace(']', '');

        const options = { dock, rtl };

        const content = lines.slice(1, -1).join('\n').trim();

        snippets.push({ key, type, options, content });
      } catch {}
    });

    const template = snippets.find((snippet) => snippet.key == 'template');

    const className = context.filePath
      .split(/[/|\\]/g)
      .slice(0, -1)
      .slice(-2)
      .map(pascalCase)
      .join('');

    if (template)
      context.fileContent = `
        import { Element } from '@htmlplus/element';

        @Element()
        class ${className} {
          render() {
            return (
              ${template.content} 
            );
          }
        }
      `;

    const script = snippets.find((snippet) => snippet.key == 'script');

    if (script) context.fileContent = script.content;

    setOutput(name, context, snippets);
  };
  return { name, run };
};
