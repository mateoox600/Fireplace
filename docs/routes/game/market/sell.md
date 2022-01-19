## /game/market/sell

Headers:  
  - **token** - A player token  

Parameters:  
  - **itemId** - The id of the item to sell
  - **number** - The number of item to sell  

Can Raise: [TokenNotFoundInHeaders](https://github.com/mateoox600/RGRPG/blob/master/docs/errors/TokenNotFoundInHeaders.md), [RequireItemId](https://github.com/mateoox600/RGRPG/blob/master/docs/errors/item/RequireItemId.md), [ItemDoesntExist](https://github.com/mateoox600/RGRPG/blob/master/docs/errors/item/ItemDoesntExist.md), [RequireItemNumber](https://github.com/mateoox600/RGRPG/blob/master/docs/errors/item/RequireItemNumber.md), [ItemNumberIsntValid](https://github.com/mateoox600/RGRPG/blob/master/docs/errors/item/ItemNumberIsntValid.md) or [NotEnoughItem](https://github.com/mateoox600/RGRPG/blob/master/docs/errors/item/NotEnoughItem.md)

Returns:  
```ts
{
    income: number
}
```