"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultPlayer = void 0;
const TokenManager_1 = __importDefault(require("../utils/TokenManager"));
const PlayerManager_1 = __importDefault(require("./PlayerManager"));
function defaultPlayer() {
    let token = TokenManager_1.default.generateToken();
    while (PlayerManager_1.default.playerExist(token))
        token = TokenManager_1.default.generateToken();
    return {
        token,
        createdAt: Date.now(),
        coins: 0,
        health: 100,
        xp: 0,
        attack: { min: 1, max: 4 },
        defense: { min: 0, max: 0 },
        cooldown: {
            mining: {
                last: 0,
                time: 0
            }
        },
        inventory: {}
    };
}
exports.defaultPlayer = defaultPlayer;
