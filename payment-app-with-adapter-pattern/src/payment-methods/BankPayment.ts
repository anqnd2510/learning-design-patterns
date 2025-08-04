import { IPaymentProcessor } from "../interfaces/IPaymentProcessor";

export class BankPayment implements IPaymentProcessor {
  pay(amount: number): void {
    console.log(`💳 Thanh toán qua ngân hàng: ${amount} VND`);
  }
}
