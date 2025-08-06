// Giả sử ta đang xây hệ thống hiển thị thông báo qua nhiều kênh khác nhau (Email, SMS, Slack...)
// và hỗ trợ nhiều loại thông báo khác nhau (Cảnh báo, Lỗi, Thông tin...).
// Nếu dùng kế thừa truyền thống, số lượng lớp sẽ nổ tung như:
// EmailErrorNotification, SlackWarningNotification, SmsInfoNotification
// Dùng Bridge Pattern tách được:
// Abstraction: Loại thông báo (Notification)
// Implementation: Kênh gửi thông báo (NotificationSender)

import { EmailSender } from "./implementation/EmailSender";
import { SlackSender } from "./implementation/SlackSender";
import { ErrorNotification } from "./abstraction/ErrorNotification";

// Gửi lỗi qua Email
const emailSender = new EmailSender();
const emailError = new ErrorNotification(emailSender);
emailError.notify("Server is down!");

// Gửi lỗi qua Slack
const slackSender = new SlackSender();
const slackError = new ErrorNotification(slackSender);
slackError.notify("Database connection failed!");

// ✅ Lợi ích thấy rõ
// Dễ mở rộng kênh gửi → chỉ cần tạo lớp mới implement NotificationSender
// Dễ mở rộng loại thông báo → chỉ cần extend Notification
// Không bị nổ số lượng class như trong kế thừa truyền thống
