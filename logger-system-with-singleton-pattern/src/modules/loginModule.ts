import { Logger } from "../logger/logger";

export function simulateLogin() {
  const logger = Logger.getInstance();
  logger.log("User has logged in.");
}
