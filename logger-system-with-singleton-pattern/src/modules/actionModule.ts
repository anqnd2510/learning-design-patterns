import { Logger } from "../logger/logger";

export function simulateAction() {
  const logger = Logger.getInstance();
  logger.log("User performed an action.");
}
