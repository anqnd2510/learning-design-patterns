import { Drink } from "./drink";

export class Coffee implements Drink {
  serve(): void {
    console.log("Serving a hot Coffee ☕");
  }
}
