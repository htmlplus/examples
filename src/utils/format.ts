import { type Options, format as core } from 'prettier';

export type FormatOptions = Options;

const defaults: FormatOptions = {
	embeddedLanguageFormatting: 'auto',
	printWidth: 100,
	quoteProps: 'consistent',
	singleQuote: true,
	jsxSingleQuote: false,
	trailingComma: 'none',
	importOrder: ['<THIRD_PARTY_MODULES>', '^@htmlplus/ui(.*)$', '^@/(.*)$', './config*', '^[.](.*)'],
	importOrderCaseInsensitive: false,
	importOrderParserPlugins: [
		'typescript',
		'jsx',
		'classProperties',
		'["decorators", { "decoratorsBeforeExport": true }]'
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	vueIndentScriptAndStyle: true,
	overrides: [
		{
			files: '*.json',
			options: {
				printWidth: 50
			}
		},
		{
			files: '*.svelte',
			options: {
				parser: 'svelte'
			}
		}
	],
	plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-svelte']
};

export const format = async (source: string, options: Options = {}): Promise<string> => {
	const cloned = Object.assign({}, defaults);

	if (options.parser === 'json') {
		options.printWidth = 50;
	}

	const config = Object.assign(cloned, options);

	return await core(source, config);
};
