## HuntableEntity extends Entity
```ts
{
    health: Range,
    defense: Range,
    attack: Range,
    rewards: {
        coins: Range,
        xp: Range,
        health: Range,
        items: {
            id: string,
            range: Range
        }[]
    }
}
```