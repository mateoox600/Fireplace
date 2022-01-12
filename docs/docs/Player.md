## Player
```ts
{
    token: string,
    createdAt: number,
    coins: number,
    health: number,
    xp: number,
    attack: Range,
    defense: Range,
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