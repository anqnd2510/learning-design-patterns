import { Computer } from "../models/Computer";

export class ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  setCPU(cpu: string): this {
    this.computer.cpu = cpu;
    return this;
  }

  setRAM(ram: string): this {
    this.computer.ram = ram;
    return this;
  }
  setSSD(ssd: string): this {
    this.computer.ssd = ssd;
    return this;
  }

  setGPU(gpu: string): this {
    this.computer.gpu = gpu;
    return this;
  }
  build(): Computer {
    return this.computer;
  }
}
