import { ToppingDecorator } from "./ToppingDecorator";

export class Cheese extends ToppingDecorator {
  getDescription(): string {
    return this.drink.getDescription() + ", Kem cheese";
  }
  getCost(): number {
    return this.drink.getCost() + 7000;
  }
}
