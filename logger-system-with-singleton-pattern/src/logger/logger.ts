export class Logger {
  private static instance: Logger;
  private logs: string[] = [];

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string): void {
    const timestamp = new Date().toISOString();
    const formatted = `[${timestamp}] ${message}`;
    this.logs.push(formatted);
    console.log(formatted);
  }
  public getLogHistory(): string[] {
    return this.logs;
  }
}
// Logger.ts là Singleton Pattern – kiểm soát tạo duy nhất 1 instance.
