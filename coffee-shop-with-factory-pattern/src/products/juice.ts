import { Drink } from "./drink";

export class Juice implements Drink {
  serve() {
    console.log("Serving a fresh Juice 🍹");
  }
}
