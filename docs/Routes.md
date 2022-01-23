`/new` - create a new account.  
`/game` - get account information (the endpoint and all his child endpoint require a token it the headers).  
`/game/mine` - Mining endpoint.  
`/game/hunt` - Hunting endpoint needs and entity id in the query parameters (`entityId`).  
`/game/market/sell` - Used to sell items from your inventory an item id (`itemId`) and a number of item (`number`) to sell is required.  
`/game/entity` - Used to get info on entities sub-endpoint `list` is used to recover the entities list and has an endpoint for huntable entities.  
`/game/item` - Used to get info on items sun-endpoint `list` is used to recover the items list.