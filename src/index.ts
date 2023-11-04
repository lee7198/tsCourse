import Dog from "./Dog";
import ShibaDog from "./ShibaDog";
import { add, multiply, divide } from "./utils";

console.log("from index file!");

const elton = new Dog("Elton", "Aussie", 0.5);
elton.bark();

console.log(add(1, 2));
console.log(multiply(1, 2));
console.log(divide(1, 2));

const shiba = new ShibaDog("Shiba", "Aussie", 0.5, "시바");
