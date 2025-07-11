import { IPaymentStrategy } from "../strategy/IPaymentStrategy";

export class PaymentContext {
  constructor(private strategy: IPaymentStrategy) {}
  setStrategy(strategy: IPaymentStrategy) {
    this.strategy = strategy;
  }
  pay(amount: number) {
    this.strategy.pay(amount);
  }
}
// Context chỉ giữ tham chiếu và sử dụng nó, không chứa chính hành vi
