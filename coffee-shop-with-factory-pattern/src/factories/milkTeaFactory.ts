import { DrinkFactory } from "./drinkFactory";
import { MilkTea } from "../products/milkTea";

export class MilkTeaFactory extends DrinkFactory {
  createDrink() {
    return new MilkTea();
  }
}
