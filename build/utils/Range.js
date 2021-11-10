"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Range {
    constructor(min, max) {
        this.min = min;
        this.max = max;
    }
    rand() {
        return Math.random() * (this.max - this.min) + this.min;
    }
    toString() {
        return `${this.min} - ${this.max}`;
    }
    static rand(obj) {
        return new Range(obj.min, obj.max).rand();
    }
}
exports.default = Range;
