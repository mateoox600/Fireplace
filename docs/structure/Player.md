## Player
```ts
{
    token: string,
    createdAt: number,
    coins: number,
    health: number,
    maxHealth: number
    xp: number,
    level: number,
    attack: { min: number, max: number },
    defense: { min: number, max: number },
    cooldown: {
        mining: {
            last: number,
            time: number
        }
    },
    inventory: {
        [id: string]: number
    }
}
```