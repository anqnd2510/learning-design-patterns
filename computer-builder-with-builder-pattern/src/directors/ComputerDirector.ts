import { ComputerBuilder } from "../builders/ComputerBuilder";

export class ComputerDirector {
  constructor(private builder: ComputerBuilder) {}

  buildGamingPC(): void {
    this.builder
      .setCPU("Intel i9")
      .setRAM("32GB")
      .setSSD("1TB NVMe")
      .setGPU("RTX 4090");
  }
  buildOfficePC(): void {
    this.builder.setCPU("Intel i5").setRAM("16GB").setSSD("512GB SSD");
  }
}
