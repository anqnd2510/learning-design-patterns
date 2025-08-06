import { NotificationSender } from "./NotificationSender";

export class SlackSender implements NotificationSender {
  send(message: string): void {
    console.log(`💬 Slack message sent: ${message}`);
  }
}
