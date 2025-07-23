import { Drink } from "../products/drink";

export abstract class DrinkFactory {
  abstract createDrink(): Drink;

  orderDrink() {
    const drink = this.createDrink();
    drink.serve();
  }
}
