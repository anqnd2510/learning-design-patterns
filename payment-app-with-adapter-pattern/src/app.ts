import { BankPayment } from "./payment-methods/BankPayment";
import { PayPalAdapter } from "./adapters/PayPalAdapter";
import { IPaymentProcessor } from "./interfaces/IPaymentProcessor";
import { PayPalSDK } from "./payment-methods/PayPalSDK";

function checkout(paymentProcessor: IPaymentProcessor, amount: number) {
  paymentProcessor.pay(amount);
}
// Thanh toán qua ngân hàng bằng VNĐ
checkout(new BankPayment(), 500_000);

// Thanh toán qua ngân hàng bằng PayPal ( dùng adapter );
checkout(new PayPalAdapter(new PayPalSDK()), 500_000);
