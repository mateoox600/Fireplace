## HuntableEntity extends Entity
```ts
{
    health: { min: number, max: number },
    defense: { min: number, max: number },
    attack: { min: number, max: number },
    rewards: {
        coins: { min: number, max: number },
        xp: { min: number, max: number },
        health: { min: number, max: number },
        items: {
            id: string,
            range: { min: number, max: number }
        }[]
    }
}
```