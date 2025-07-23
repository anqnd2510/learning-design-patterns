import { DrinkFactory } from "./drinkFactory";
import { Coffee } from "../products/coffee";
import { Drink } from "../products/drink";

export class CoffeeFactory extends DrinkFactory {
  createDrink(): Drink {
    return new Coffee();
  }
}
