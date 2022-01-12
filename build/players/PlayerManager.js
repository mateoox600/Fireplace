"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const Player_1 = require("./Player");
class PlayerManager {
    static getPlayer(token) {
        return __1.players.getData(`/${token}`);
    }
    static updatePlayer(player) {
        __1.players.push(`/${player.token}`, player, true);
        return player;
    }
    static newPlayer() {
        return this.updatePlayer((0, Player_1.defaultPlayer)());
    }
    static playerExist(token) {
        return __1.players.exists(`/${token}`);
    }
    static calculateXpLevel(player) {
        return Math.floor(player.xp / (100 + Math.floor(player.xp / 100)));
    }
    static calculateMaxHealth(player) {
        return 100 + Math.floor((this.calculateXpLevel(player) / 2)) * 5;
    }
}
exports.default = PlayerManager;
