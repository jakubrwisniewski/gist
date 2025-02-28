# Object

### is
This method allows to determine whether two values are the same value (compare values)

```js
console.log(Object.is('1', 1));
// Expected output: false

console.log(Object.is(NaN, NaN));
// Expected output: true

console.log(Object.is(-0, 0));
// Expected output: false

const obj = {};
console.log(Object.is(obj, {}));
// Expected output: false
```

***

### freeze
Prevents any object modifications

```js
const obj = { name: "Alice" };
Object.freeze(obj);
obj.name = "Bob";
console.log(obj); // { name: "Alice" }
```

***

### seal
Seals an object, allowing changes to existing properties but no additions or deletions.

```js
const obj = { name: "Alice" };
Object.seal(obj);
obj.age = 30; // Fails
console.log(obj); // { name: "Alice" }
```
