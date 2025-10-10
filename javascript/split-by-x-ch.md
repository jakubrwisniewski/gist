# Split string by X characters

```js
const input = "123456789";
const output = input.match(/.{3}/g).join(" - ");
console.log(output); // "123 - 456 - 789"
```
