import * as t from '@babel/types';

export interface IContext {
  config?: IContextConfig;
  dependencies: IContextDependency[];
  directory: IContextDirectory;
  file: IContextFile;
  output: IContextOutput;
  script?: IContextScript;
  settings?: IContextSettings;
  style?: IContextStyle;
  template?: IContextTemplate;
  title: string;
}

export interface IContextConfig {
  ast: t.File;
}

export interface IContextDependency {
  name: string;
  version: string;
}

export interface IContextDirectory {
  name: string;
  path: string;
}

export interface IContextFile {
  content: string;
  extension: string;
  name: string;
  path: string;
}

export interface IContextOutput {
  [key: string]: any;
}

export interface IContextScript {
  ast: t.File;
}

export interface IContextSettings {
  dock?: boolean;
  isolate?: boolean;
  rtl?: boolean;
}

export interface IContextStyle {
  content: string;
}

export interface IContextTemplate {
  ast: t.File;
  wrapped: boolean;
}
