import { players } from '..';
import Player, { defaultPlayer } from './Player';

export default class PlayerManager {

    public static getPlayer(token: string): Player {
        return players.getData(`/${token}`);
    }

    public static updatePlayer(player: Player): Player {
        players.push(`/${player.token}`, player, true);
        return player;
    }

    public static newPlayer(): Player {
        return this.updatePlayer(defaultPlayer());
    }

    public static playerExist(token: string): boolean {
        return players.exists(`/${token}`);
    }

    public static calculateXpLevel(player: Player) {
        return Math.floor(player.xp / (100 + Math.floor(player.xp/100)));
    }

    public static calculateMaxHealth(player: Player) {
        return 100 + Math.floor((this.calculateXpLevel(player) / 2)) * 5;
    }

}