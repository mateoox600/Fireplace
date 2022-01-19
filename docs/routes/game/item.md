## /game/item

Headers:  
  - **token** - A player token  

Parameters:  
  - **itemId** - the id of the item to get  

Can Raise: [TokenNotFoundInHeaders](https://github.com/mateoox600/RGRPG/blob/master/docs/errors/TokenNotFoundInHeaders.md), [RequireItemId](https://github.com/mateoox600/RGRPG/blob/master/docs/errors/item/RequireItemId.md) or [ItemDoesntExist](https://github.com/mateoox600/RGRPG/blob/master/docs/errors/item/ItemDoesntExist.md)

Returns: [Item](https://github.com/mateoox600/RGRPG/blob/master/docs/structure/item/Item.md)