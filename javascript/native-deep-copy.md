# Native deep object copy (clone)

```js
const source = {
	nested: { "Nested" },
	plain: "Plain"
};

const copied = structuredClone(source);

source.nested === copied.nested // false
```

[https://caniuse.com/mdn-api\_structuredclone](https://caniuse.com/mdn-api_structuredclone)

