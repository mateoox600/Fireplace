## /game/hunt

Headers:  
  - **token** - A player token  

Parameters:  
  - **entityId** - The id of the entity to hunt  

Can Raise: [TokenNotFoundInHeaders](https://github.com/mateoox600/RGRPG/blob/master/docs/errors/TokenNotFoundInHeaders.md), [NotEnoughHealth](https://github.com/mateoox600/RGRPG/blob/master/docs/errors/misc/NotEnoughHealth.md), [RequireHuntableEntityId](https://github.com/mateoox600/RGRPG/blob/master/docs/errors/entity/RequireHuntableEntityId.md) or [EntityDoesntExistOrItIsntHuntable](https://github.com/mateoox600/RGRPG/blob/master/docs/errors/entity/EntityDoesntExistOrItIsntHuntable.md)

Returns:  
```ts
{
    coins: number,
    xp: number,
    items: {
        [id: string]: number
    },
    died: boolean
}
```