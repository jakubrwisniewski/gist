# Template literal types

```ts
type Https = `https://${string}`;
```

Above type forces types to have specific syntax

```ts
const url: Https = "https://example.com";
```

Any string without `https://` prefix will cause type error.
