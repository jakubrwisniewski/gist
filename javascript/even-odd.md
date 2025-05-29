# Check if number is even or odd

```js
function isEven(number) {
	return !(number & 1);
}

isEven(200); // true
isEven(201); // false
```
