# Set

### intersection

```js
const odds = [1, 3, 5, 7, 9];
const squares = [1, 4, 9];

new Set(odds).intersection(new Set(squares)); //=> Set(2) { 1, 9 }
```

***

### union

```js
const evens = [2, 4, 6, 8];
const squares = [1, 4, 9];

new Set(evens).union(new Set(squares)); //=> Set(6) { 2, 4, 6, 8, 1, 9 }
```

***

### difference

```js
const odds = [1, 3, 5, 7, 9];
const squares = [1, 4, 9];

new Set(odds).difference(new Set(squares)); //=> Set(3) { 3, 5, 7 }
```

***

### symmetricDifference

```js
const evens = [2, 4, 6, 8];
const squares = [1, 4, 9];

new Set(evens).symmetricDifference(new Set(squares));
//=> Set(5) {2, 6, 8, 1, 9}
```

***

### isSubsetOf

```js
const fours = [4, 8, 12, 16];
const evens = [2, 4, 6, 8, 10, 12, 14, 16, 18];

new Set(fours).isSubsetOf(new Set(evens)); //=> true
```

***

### isSupersetOf

```js
const evens = [2, 4, 6, 8, 10, 12, 14, 16, 18];
const fours = [4, 8, 12, 16];

new Set(evens).isSupersetOf(new Set(fours)); //=> true
```

***

isDisjointFrom

```js
const primes = [2, 3, 5, 7, 11, 13, 17, 19];
const squares = [1, 4, 9, 16];

new Set(primes).isDisjointFrom(new Set(squares)); //=> true
```
