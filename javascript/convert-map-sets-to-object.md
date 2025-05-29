# Convert Maps and Sets to object

```js
const map = new Map();
map.set('i', 'Ivan');
map.set('j', 'John');
Object.fromEntries(map.entries()); // { i: 'Ivan', j: 'John' }

const set = new Set();
set.add('Ivan');
set.add('John');
Object.fromEntries(set.entries()); // { Ivan: 'Ivan', John: 'John' }
```
