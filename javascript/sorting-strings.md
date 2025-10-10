# JavaScript: Sorting strings with localeCompare

Regular sort
```js
["ą", "z"].sort(); // ["z", "ą"]
```

localeCompare sort
```js
["ą", "z"].sort((left, right) => left.localeCompare(right)); // ["ą", "z"]
```

[Preview](preview/sorting-strings.html)
