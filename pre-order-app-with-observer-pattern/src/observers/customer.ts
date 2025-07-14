import { Observer } from "../interfaces/observer.interface";

export class Customer implements Observer {
  constructor(private name: string) {}

  update(product: string): void {
    console.log(`${this.name} nhận được thông báo: Sản phẩm mới - ${product}`);
  }
}
