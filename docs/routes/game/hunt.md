## /game/hunt

Needs:  
  - token in the headers
  - entityId in the query
  
Returns:  
```ts
{
    coins: number,
    xp: number,
    items: {
        [id: string]: number
    }
}
```