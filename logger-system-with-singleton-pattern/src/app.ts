// 🔧 Bối cảnh thực tế
// Giả sử đang xây dựng một app mà tất cả các hành động ghi log (debug, error, info...)
// đều phải dùng chung một Logger duy nhất, để đảm bảo log không bị phân tán hoặc ghi trùng.

import { simulateAction } from "./modules/actionModule";
import { simulateLogin } from "./modules/loginModule";
import { Logger } from "./logger/logger";

simulateLogin();
simulateAction();

const logger = Logger.getInstance();
console.log("\n📜 Log history:");
console.log(logger.getLogHistory());
