import { CreditStrategy } from "./strategy/CreditCardStrategy";
import { MomoStrategy } from "./strategy/MomoStrategy";
import { PaypalStrategy } from "./strategy/PaypalStrategy";
import { PaymentContext } from "./context/PaymentContext";

const paymentContext = new PaymentContext(new CreditStrategy());
// default strategy is CreditStrategy
paymentContext.pay(100); // Paying 100 using Credit.

paymentContext.setStrategy(new MomoStrategy());
paymentContext.pay(200); // Paying 200 using Momo.

paymentContext.setStrategy(new PaypalStrategy());
paymentContext.pay(300); // Paying 300 using PayPal.
