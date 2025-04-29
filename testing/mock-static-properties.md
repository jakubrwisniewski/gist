# Mock static properties

As example of `window.location.href`

```js
global.window = Object.create(window);

const url = "http://dummy.com>";
Object.defineProperty(window, 'location', {
  value: {
    href: url
  }
});

expect(window.location.href).toEqual(url);
```
