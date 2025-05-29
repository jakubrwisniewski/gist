# Spread operator


### Objects

Merge objects
```js
const first = { name: "Jane", lastName: "Doe" };
const second = { name: "John" };

const result = { ...first, ...second }; // { name: "John", lastName: "Doe" }
```

Extract (remove) property from object. Access rest of items as object.

```js
const data = {
    id: 10,
    firstName: 'John',
    lastName: 'Doe'
};

const { id, ...nextData } = data;
console.log(nextData); // { firstName: "John", lastName: "Doe" }
```

---

### Arrays

Merge arrays

```js
const first = ["Jane"];
const second = ["John"];

const result = [...first, ...second]; // ["Jane", "John"]
```

Extract (remove) property from array. Access rest of items as array.

```js
const list = [1, 2, 3];
const [first, ...rest] = list;

console.log(first); // 1
console.log(rest); // [2, 3]
```

---

### Functions

Pass multiple arguments dynamically

```js
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

sum(...numbers); // 6
Math.max(...numbers); // 3
```
