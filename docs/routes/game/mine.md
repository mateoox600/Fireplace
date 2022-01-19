## /game/mine

Headers:  
  - **token** - A player token  

Can Raise: [TokenNotFoundInHeaders](https://github.com/mateoox600/RGRPG/blob/master/docs/errors/TokenNotFoundInHeaders.md)

Returns:  
```ts
{
    gain: number,
    time: number,
    delay: number
}
```