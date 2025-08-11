import { IDrink } from "./IDrink";

export class BasicMilkTea implements IDrink {
  getDescription(): string {
    return "Milk Tea";
  }
  getCost(): number {
    return 20000;
  }
}
