// Giả lập PayPal SDK của bên thứ 3
export class PayPalSDK {
  makePayment(total: number) {
    console.log(`💰 Thanh toán qua PayPal: ${total.toFixed(2)} USD`);
  }
}
