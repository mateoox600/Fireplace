## /game/entity

Headers:  
  - **token** - A player token  

Parameters:  
  - **entityId** - the id of the entity to get  

Can Raise: [TokenNotFoundInHeaders](https://github.com/mateoox600/RGRPG/blob/master/docs/errors/TokenNotFoundInHeaders.md), [RequireEntityId](https://github.com/mateoox600/RGRPG/blob/master/docs/errors/entity/RequireEntityId.md) or [EntityDoesntExist](https://github.com/mateoox600/RGRPG/blob/master/docs/errors/entity/EntityDoesntExist.md)

Returns: [AllEntity](https://github.com/mateoox600/RGRPG/blob/master/docs/structure/entity/AllEntity.md)