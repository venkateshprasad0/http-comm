import { ICar } from "./ICar";

export class Car implements ICar {
    id: number = 0;
    brand: string = "";
    model: string = "";
    year: number = 0;
    type: string = "";

    constructor(value: Object = {}) {
        Object.assign(value);
    }

}