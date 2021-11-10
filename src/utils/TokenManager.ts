import { randomBytes } from 'crypto';

export default class TokenManager {

    public static generateToken(): string {
        const bytes = Array.from(randomBytes(56));
        const date = Date.now().toString();
        const segments = date.substring(date.length - 8).split('').map((s, idx) => Math.abs(Number(s) - bytes[idx]));
        const rand = [ ...bytes, ...segments ];

        const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

        const token = rand.map((n) => chars[n % chars.length]).join('');

        return token;
    }

}