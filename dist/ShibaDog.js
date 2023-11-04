import Dog from "./Dog.js";
export default class ShibaDog extends Dog {
    constructor(name, breed, age, shiba) {
        super(name, breed, age);
        this.shiba = shiba;
    }
}
