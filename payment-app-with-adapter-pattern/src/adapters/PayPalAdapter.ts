// dễ hiểu thì đây là cục chuyển đổi adapter
import { IPaymentProcessor } from "../interfaces/IPaymentProcessor";
import { PayPalSDK } from "../payment-methods/PayPalSDK";

export class PayPalAdapter implements IPaymentProcessor {
  constructor(private paypal: PayPalSDK) {}
  pay(amount: number): void {
    // Chuyển đổi tiền VND sang USD (ví dụ 1 USD = 24,000 VND)
    const usdAmount = amount / 25000;
    this.paypal.makePayment(usdAmount);
  }
}
