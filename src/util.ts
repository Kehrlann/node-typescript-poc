import { getLogger } from "./nested/logger";

const logger = getLogger("greet");

export function greet(name: string) {
  logger(`Bonjour, ${name} !`);
}
