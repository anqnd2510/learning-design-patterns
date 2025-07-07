import { IPaymentStrategy } from "../strategy/IPaymentStrategy";

export class CreditStrategy implements IPaymentStrategy {
  pay(amount: number): void {
    console.log(`Paying ${amount} using Credit.`);
  }
}
