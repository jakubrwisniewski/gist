# Expect one property from object

```js
const mock = jest.fn();
mock({
	title: "title",
	name: "name",
});

expect(mock).toHaveBeeenCalledWith(expect.objectContaining({
	title: "title"
}));
// it doesn't care about 'name' property
```
