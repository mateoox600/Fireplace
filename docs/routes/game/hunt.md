## /game/hunt

Headers:  
  - **token** - A player token  

Parameters:  
  - **entityId** - The id of the entity to hunt  
  
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