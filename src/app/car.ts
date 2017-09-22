import { Tires } from './tires';
import { Engine } from './engine';
export class Car {

    public description = 'No Description';
    constructor(
        public engine: Engine,
        public tires: Tires
    ) {

    }

    drive(): string {
        return `${this.description} car with ` +
            `${this.engine.cylinders} cylinders and ${this.tires.make} tires.`;
    }

}
