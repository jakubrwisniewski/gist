# Expect one property from object

```js
const mock = jest.fn();
mock({
  title: "title",
  name: "name",
});

expect(mock).toHaveBeeenCalledWith(
  expect.objectContaining({
    title: "title",
  }),
);
// it doesn't care about 'name' property
```

It also works with nested object nicely

```js
expect(mock).toHaveBeenCalledWith(
  expect.objectContaining({
    date: expect.any(Date),
    props: expect.objectContaining({
      page: "1",
    }),
  }),
);
```
