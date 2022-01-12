"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
class TokenManager {
    static generateToken() {
        const bytes = Array.from((0, crypto_1.randomBytes)(56));
        const date = Date.now().toString();
        const segments = date.substring(date.length - 8).split('').map((s, idx) => Math.abs(Number(s) - bytes[idx]));
        const rand = [...bytes, ...segments];
        const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const token = rand.map((n) => chars[n % chars.length]).join('');
        return token;
    }
}
exports.default = TokenManager;
