// 🎯 Tình huống
// Quán trà sữa bán trà sữa cơ bản nhưng khách có thể chọn thêm topping như: trân châu, thạch, kem cheese,v.v.
// Nếu dùng kế thừa cho tất cả biến thể (MilkTeaWithPearl, MilkTeaWithCheese, MilkTeaWithCheeseAndPearl...)
// thì sẽ nổ tung code vì số lượng class quá nhiều.
// Decorator Pattern giải quyết bằng cách: có 1 lớp MilkTea cơ bản, sau đó bọc thêm các lớp decorator cho từng topping.

import { BasicMilkTea } from "./models/BasicMilkTea";
import { Jelly } from "./decorators/Jelly";
import { Cheese } from "./decorators/Cheese";
import { Pearl } from "./decorators/Pearl";

let myDrink = new BasicMilkTea();
myDrink = new Pearl(myDrink);
myDrink = new Cheese(myDrink);
myDrink = new Jelly(myDrink);

let myDrink2 = new BasicMilkTea();
myDrink2 = new Pearl(myDrink2);
myDrink2 = new Cheese(myDrink2);

console.log(myDrink.getDescription()); // "Trà sữa, Trân châu, Kem cheese, Thạch"
console.log(myDrink.getCost() + " VND"); // 37000 VND

console.log(myDrink2.getDescription());
console.log(myDrink2.getCost() + " VND");
