# Native deep object copy (clone)

```js
const source = {
	nested: { key: "Nested" },
	plain: "Plain"
};

const copied = structuredClone(source);

source.nested === copied.nested // false
```

[caniuse.com/mdn-api_structuredclone](https://caniuse.com/mdn-api_structuredclone)
