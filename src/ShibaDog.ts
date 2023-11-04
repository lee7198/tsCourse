import Dog from "./Dog.js";

export default class ShibaDog extends Dog {
  constructor(name: string, breed: string, age: number, public shiba: string) {
    super(name, breed, age);
  }
}
