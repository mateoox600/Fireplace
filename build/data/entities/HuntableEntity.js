"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HuntableEntities = void 0;
const EntitySlime_1 = __importDefault(require("./EntitySlime"));
const EntityWolf_1 = __importDefault(require("./EntityWolf"));
exports.HuntableEntities = [
    EntitySlime_1.default,
    EntityWolf_1.default
];
