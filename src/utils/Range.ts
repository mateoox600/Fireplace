
export default class Range {

    constructor(public min: number, public max: number) { }

    rand() {
        return Math.random() * ( this.max - this.min ) + this.min;
    }

    toString() {
        return `${this.min} - ${this.max}`;
    }

    public static rand(obj: { min: number, max: number }) {
        return new Range(obj.min, obj.max).rand();
    }

}