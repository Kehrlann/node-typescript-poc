import * as loggers from "debug";
import { IDebugger } from "debug";

export function getLogger(name: string): IDebugger {
  return loggers(name);
}
