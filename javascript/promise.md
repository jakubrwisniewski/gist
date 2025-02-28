# Promise

### withResolvers

```js
const { promise, resolve, reject } = Promise.withResolvers();

setTimeout(() => {
	resolve(true); // or reject();
}, 1000);
```
