import { DrinkFactory } from "./drinkFactory";
import { Juice } from "../products/juice";

export class JuiceFactory extends DrinkFactory {
  createDrink() {
    return new Juice();
  }
}
