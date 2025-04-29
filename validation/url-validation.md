# Url Validation

```js
function isUrlValid(url) {
	try {
		new URL(url);
		return true;
	}
	catch(error) {
		return false;
	}
}
```
