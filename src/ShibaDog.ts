import Dog from "./Dog";

export default class ShibaDog extends Dog {
  constructor(name: string, breed: string, age: number, public shiba: string) {
    super(name, breed, age);
  }
}
