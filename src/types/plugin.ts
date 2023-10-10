import { IContext } from './context';

export type IPlugin<T> = (options: T) => {
  name: string;
  start?: (contexts: IContext[]) => Promise<void>;
  run?: (context: IContext, contexts: IContext[]) => Promise<void | IContext>;
  finish?: (contexts: IContext[]) => Promise<void>;
};
