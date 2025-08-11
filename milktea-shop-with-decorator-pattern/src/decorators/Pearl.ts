import { ToppingDecorator } from "./ToppingDecorator";

export class Pearl extends ToppingDecorator {
  getDescription(): string {
    return this.drink.getDescription() + ", Trân châu";
  }
  getCost(): number {
    return this.drink.getCost() + 5000;
  }
}
