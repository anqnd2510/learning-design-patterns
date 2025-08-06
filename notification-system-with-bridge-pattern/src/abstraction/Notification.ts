import { NotificationSender } from "../implementation/NotificationSender";

export abstract class Notification {
  constructor(protected sender: NotificationSender) {}
  abstract notify(message: string): void;
}
