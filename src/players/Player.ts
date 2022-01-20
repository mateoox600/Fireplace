import TokenManager from './TokenManager';
import PlayerManager from './PlayerManager';

export default interface Player {
    token: string,
    createdAt: number,
    coins: number,
    health: number,
    xp: number,
    attack: { min: number, max: number},
    defense: { min: number, max: number},
    cooldown: {
        mining: {
            last: number,
            time: number
        }
    },
    inventory: { [id: string]: number }
// eslint-disable-next-line semi
}

export function defaultPlayer(): Player {
    let token = TokenManager.generateToken();
    while(PlayerManager.playerExist(token)) token = TokenManager.generateToken();
    return {
        token,
        createdAt: Date.now(),
        coins: 0,
        health: 100,
        xp: 0,
        attack: { min: 1, max: 4},
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