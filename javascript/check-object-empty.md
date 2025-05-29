# Check if object is empty

Method is dedicated to simple object. Not tested others like arrays, dates, maps etc.


```js
function isObjectEmpty(object) {
	for (const i in object) return false;
	return true;
}

isObjectEmpty({}); // true
isObjectEmpty({ a: 1 }); // false
```
