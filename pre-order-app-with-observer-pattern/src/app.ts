import { Store } from "./subjects/store";
import { Customer } from "./observers/customer";

const store = new Store();

const qDuyAn = new Customer("Quan Duy An");
const duyAn = new Customer("Duy An");
const an = new Customer("An");

store.addCustomer(qDuyAn);
store.addCustomer(duyAn);
store.addCustomer(an);

store.addNewProduct("Tai nghe");
store.addNewProduct("Bàn phím");

store.removeCustomer(an);
store.addNewProduct("Màn hình");
