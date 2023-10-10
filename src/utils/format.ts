import { Options, format as core, resolveConfig, resolveConfigFile } from 'prettier';

export type FormatOptions = Options;

let defaults: FormatOptions;

export const format = async (source: string, options: Options = {}): Promise<string> => {
  if (!defaults) {
    const path = await resolveConfigFile();
    if (path) {
      defaults = (await resolveConfig(path)) as any;
    }
  }

  const cloned = Object.assign({}, defaults);

  if (options.parser == 'json') {
    options.printWidth = 50;
  }

  const config = Object.assign(cloned, options);

  return await core(source, config);
};
