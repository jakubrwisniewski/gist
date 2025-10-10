# Concatenate array

Old way
```js
const source = [1, 2];
const next = [3, 4];
const result = source.concat(next);

console.log(source); // [1, 2]
console.log(result); // [1, 2, 3, 4]
```

Cleaner way (with source array modification)
```js
const source = [1, 2];
source.push(...[3, 4]);

console.log(source); // [1, 2, 3, 4]
```

Cleaner way (without source array modification)
```js
const source = [1, 2];
const next = [3, 4];
const result = [...source, ...next];

console.log(source); // [1, 2]
console.log(result); // [1, 2, 3, 4]
```
