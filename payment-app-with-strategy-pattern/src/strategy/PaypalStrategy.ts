import { IPaymentStrategy } from "../strategy/IPaymentStrategy";

export class PaypalStrategy implements IPaymentStrategy {
  pay(amount: number): void {
    console.log(`Paying ${amount} using PayPal.`);
  }
}
