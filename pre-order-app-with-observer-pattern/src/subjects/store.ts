import { Observer } from "../interfaces/observer.interface";

export class Store {
  private customers: Observer[] = [];

  addCustomer(customer: Observer) {
    this.customers.push(customer);
  }
  removeCustomer(customer: Observer) {
    this.customers = this.customers.filter((c) => c !== customer);
  }
  notifyCustomers(product: string) {
    for (const customer of this.customers) {
      customer.update(product);
    }
  }
  addNewProduct(product: string) {
    console.log(`🛒 Cửa hàng thêm sản phẩm mới: ${product}`);
    this.notifyCustomers(product);
  }
}
