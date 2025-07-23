// 🎯 Ví dụ thực tế ngoài đời: Quán cà phê bán đồ uống
// Giả sử bạn đến một quán cà phê và gọi:
// Người thì gọi trà sữa
// Người khác thì gọi cà phê
// Người khác nữa gọi nước ép
// Bạn không quan tâm bên trong quầy barista pha chế thế nào, bạn chỉ đặt món, và họ đưa đúng loại đồ uống bạn gọi.
// Vậy thì:
// Quầy barista chính là Factory
// Đồ uống là Product
// Loại đồ uống cụ thể (Cà phê, Trà sữa, Nước ép...) là các ConcreteProduct

import { CoffeeFactory } from "./factories/coffeeFactory";
import { MilkTeaFactory } from "./factories/milkTeaFactory";
import { JuiceFactory } from "./factories/juiceFactory";
import { DrinkFactory } from "./factories/drinkFactory";

function clientCode(factory: DrinkFactory) {
  factory.orderDrink();
}

clientCode(new CoffeeFactory()); // => Serving a hot Coffee ☕
clientCode(new MilkTeaFactory()); // => Serving a cold Milk Tea 🧋
clientCode(new JuiceFactory()); // => Serving a fresh Juice 🍹
