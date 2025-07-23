import { Drink } from "./drink";

export class MilkTea implements Drink {
  serve(): void {
    console.log("Serving a cold Milk Tea 🧋");
  }
}
