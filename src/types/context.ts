import type * as t from '@babel/types';

export interface IContext {
	configAST?: t.File;
	configContent?: string;

	dependencies: IContextDependency[];

	directoryName: string;
	directoryPath: string;

	fileContent: string;
	fileExtension: string;
	fileName: string;
	filePath: string;
	fileUpdatedTime: string;

	output: IContextOutput;

	scriptAST?: t.File;
	scriptContent?: string;

	settingsDock?: boolean;
	settingsIsolate?: boolean;
	settingsRTL?: boolean;

	styleContent?: string;

	templateAST?: t.File;
	templateContent?: string;
	templateWrapped?: boolean;

	title: string;
	description: string;

	skip: boolean;
}

export interface IContextDependency {
	name: string;
	version: string;
}

export interface IContextOutput {
	[key: string]: any;
}
