[back](./README.md)

# Array

### at
Access any element by index

```js
["a", "b", "c", "d"].at(1); // "b"
```

Access last element of array

```js
["a", "b", "c", "d"].at(-1); // "d"
```

***

### filter
Filter an array by condition method
Filter out negative values from array

```js
[false, 1, 0, '', 'cat', {}].filter(Boolean) // [1, 'cat', {}]
```

***

### map
Map array of items to array of numbers

```js
[5, '5', 3, 2, '80'].map(Number); // [5, 5, 3, 2, 80]
```

***

### splice
Remove array part from source array. Mutates original array

```js
const source = ["a", "b", "c", "d", "e"];

source.splice(1); // ["b", "c", "d", "e"]
source.splice(1, 2); // ["b", "c"]
source.splice(-2); // ["d", "e"]
source.splice(-2, 1); // ["d"]
```

***

### toReversed
Reverse array without modifying original array

```js
const source = [4, 2, 3, 1];
const reversed = source.toReversed()

console.log(source); // [4, 2, 3, 1];
console.log(reversed); // [1, 3, 2, 4]
```

***

### toSorted
Sort array without modifying original array

```js
const source = [4, 2, 3, 1];
const sorted = source.toSorted()

console.log(source); // [4, 2, 3, 1];
console.log(sorted); // [1, 2, 3, 4]
```

***

### toSpliced
Splice item from array without modifying original array

```js
const source = [4, 2, 3, 1];
const spliced = source.toSpliced(0, 2, "Added");

console.log(source); // [4, 2, 3, 1]
console.log(spliced); // ['Added', 3, 1]
```


***

### with

```js
const source = [1, 2, 3, 4];
const result = source.with(2, 10);

console.log(source); // [1, 2, 3, 5]
console.log(result); // [1, 2, 10, 4]
```

***




