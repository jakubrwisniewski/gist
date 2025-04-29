# Expect anything

Just use `expect.anything()`

```js
const value = method();
expect(value).toEqual(expect.anything());
```

Also check for type

```js
expect(value).toEqual(expect.any(String)); // check String, Number etc. type
```

