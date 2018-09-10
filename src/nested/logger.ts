import * as loggers from 'debug';
type IDebugger = loggers.IDebugger;

export function getLogger(name: string): IDebugger {
  return loggers(`test-app:${name}`);
}
