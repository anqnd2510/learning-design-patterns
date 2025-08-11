import { IDrink } from "../models/IDrink";

// Lớp Decorator chung
export abstract class ToppingDecorator implements IDrink {
  protected drink: IDrink;
  constructor(drink: IDrink) {
    this.drink = drink;
  }
  abstract getDescription(): string;
  abstract getCost(): number;
}
