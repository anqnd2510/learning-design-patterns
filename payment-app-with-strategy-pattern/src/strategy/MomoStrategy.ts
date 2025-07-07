import { IPaymentStrategy } from "../strategy/IPaymentStrategy";

export class MomoStrategy implements IPaymentStrategy {
  pay(amount: number): void {
    console.log(`Paying ${amount} using Momo.`);
  }
}
