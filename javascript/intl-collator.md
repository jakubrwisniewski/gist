# Intl.Collator

### Compare strings, sort strings

```js
const collator = new Intl.Collator("pl-PL");

["a", "b", "ą"].sort(collator.compare); // ["a", "ą", "b"]
["a", "b", "ą", "A", "Ć", "C"].sort(collator.compare); // ['a', 'A', 'ą', 'b', 'C', 'Ć']
```

### Numeric sorting

```js
const collator = new Intl.Collator('pl-PL', { numeric: true });

const files = ['chapter10.txt', 'chapter9.txt', 'chapter2.txt', 'chapter1.txt'];
files.sort(collator.compare) // ['chapter1.txt', 'chapter2.txt', 'chapter9.txt', 'chapter10.txt']
```
