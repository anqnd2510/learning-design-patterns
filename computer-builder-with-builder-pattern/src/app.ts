import { ComputerBuilder } from "./builders/ComputerBuilder";
import { ComputerDirector } from "./directors/ComputerDirector";

// Build máy chơi game
const gamingBuilder = new ComputerBuilder();
const gamingDirector = new ComputerDirector(gamingBuilder);
gamingDirector.buildGamingPC();
const gamingPC = gamingBuilder.build();
gamingPC.showConfig();

console.log("\n------------------------\n");

// Build máy văn phòng
const officeBuilder = new ComputerBuilder();
const officeDirector = new ComputerDirector(officeBuilder);
officeDirector.buildOfficePC();
const officePC = officeBuilder.build();
officePC.showConfig();

// Computer là object cần build.
// ComputerBuilder chứa logic xây dựng từng phần.
// ComputerDirector chứa quy trình build cụ thể cho từng loại máy (gaming, office).
// index.ts là nơi sử dụng Builder Pattern để tạo ra các cấu hình khác nhau.
