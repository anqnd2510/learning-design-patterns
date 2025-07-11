export interface IPaymentStrategy {
  pay(amount: number): void;
}
// Strategy là interface định nghĩa hành vi có thể thay đổi
