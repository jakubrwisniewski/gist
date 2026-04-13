# Intl.Collator

### Compare strings, sort strings

```js
const collator = new Intl.Collator("pl-PL");

["a", "b", "ą"].sort(collator.compare); // ["a", "ą", "b"]
["a", "b", "ą", "A", "Ć", "C"].sort(collator.compare); // ['a', 'A', 'ą', 'b', 'C', 'Ć']
```

```js

```
