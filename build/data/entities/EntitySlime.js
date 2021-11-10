"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Range_1 = __importDefault(require("../../utils/Range"));
exports.default = {
    id: 'slime',
    name: 'Slime',
    description: 'A little blob of liquid contained in an easly breakeable membrane',
    health: new Range_1.default(10, 10),
    defense: new Range_1.default(0, 0),
    attack: new Range_1.default(1, 3),
    rewards: {
        coins: new Range_1.default(2, 10),
        xp: new Range_1.default(4, 12),
        health: new Range_1.default(4, 16),
        items: [
            {
                id: 'small-mob-core',
                range: new Range_1.default(1, 1)
            },
            {
                id: 'membrane',
                range: new Range_1.default(0, 2)
            }
        ]
    }
};
