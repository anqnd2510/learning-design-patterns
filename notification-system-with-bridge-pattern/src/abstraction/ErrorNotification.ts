import { Notification } from "./Notification";

export class ErrorNotification extends Notification {
  notify(message: string): void {
    const formattedMessage = `❌ ERROR: ${message}`;
    this.sender.send(formattedMessage);
  }
}
