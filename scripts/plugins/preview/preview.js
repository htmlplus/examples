import { getSnippet, scoped } from '../../utils.js';

export const preview = () => {
  const name = 'preview';
  const next = (context) => {
    const classNamePrefix =
      'ex-' +
      context.filePath
        .split(/[/|\\]/g)
        .slice(0, -1)
        .slice(-2)
        .join('-');

    let { script, style } = context.outputs?.find((output) => output.name == 'react')?.output;

    if (style) style = scoped(style, `.${classNamePrefix}`);

    const dock = context.outputs
      ?.find((output) => output.name == 'prepare')
      ?.output?.some((snippet) => snippet.options?.dock);

    script = [
      script.split('export default ')[0].trim(),
      '',
      `const ${context.className}Example = () => {`,
      '  return (',
      `    <div className="${classNamePrefix}${dock ? ' dock' : ''}">`,
      `      <${context.className} />`,
      `      <style>{\`${style}\`}</style>`,
      '    </div>',
      '  )',
      '};',
      '',
      `export default ${context.className}Example;`
    ].join('\n');

    const config = getSnippet(context, 'config')?.content;

    if (config) {
      const i = script.lastIndexOf('import');

      const j = script.indexOf('\n', i);

      script = [script.slice(0, j), config, script.slice(j)].join('\n');
    }

    return { script };
  };
  return {
    name,
    next
  };
};
