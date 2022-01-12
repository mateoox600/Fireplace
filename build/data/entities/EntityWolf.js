"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Range_1 = __importDefault(require("../../utils/Range"));
exports.default = {
    id: 'wolf',
    name: 'Wolf',
    description: 'A wolf with long fur and deep eyes.',
    health: new Range_1.default(25, 30),
    defense: new Range_1.default(0, 2),
    attack: new Range_1.default(3, 5),
    rewards: {
        coins: new Range_1.default(5, 13),
        xp: new Range_1.default(6, 18),
        items: [
            {
                id: 'small-mob-core',
                range: new Range_1.default(1, 1)
            },
            {
                id: 'fur',
                range: new Range_1.default(1, 5)
            }
        ]
    }
};
