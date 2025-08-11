import { ToppingDecorator } from "./ToppingDecorator";

export class Jelly extends ToppingDecorator {
  getDescription(): string {
    return this.drink.getDescription() + ", Thạch";
  }
  getCost(): number {
    return this.drink.getCost() + 3000;
  }
}
