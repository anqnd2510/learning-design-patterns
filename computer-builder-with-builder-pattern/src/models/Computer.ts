export class Computer {
  cpu?: string;
  ram?: string;
  ssd?: string;
  gpu?: string;

  showConfig(): void {
    console.log("Computer Configuration:");
    console.log(`- CPU: ${this.cpu}`);
    console.log(`- RAM: ${this.ram}`);
    console.log(`- SSD: ${this.ssd}`);
    console.log(`- GPU: ${this.gpu}`);
  }
}
