import { NotificationSender } from "./NotificationSender";

export class EmailSender implements NotificationSender {
  send(message: string): void {
    console.log(`📧 Email sent: ${message}`);
  }
}
