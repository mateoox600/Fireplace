## /game/entity

Needs:  
  - token in the headers
  - entityId in the query
  
Returns:  
```ts
{
    id: string,
    name: string,
    description: string
} || HuntableEntity
```