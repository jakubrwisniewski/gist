# Date Validation

```js
const isDateValid = (date) => {
	return !isNaN(date.getTime());
};
```

```js
const invalid = new Date("invalid");
const valid = new Date();

isDateValid(valid); // true
isDateValid(invalid); // false
```
