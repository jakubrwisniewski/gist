
# String interpolation types

```ts
type EventName<T extends string> = `${T}Changed`;
type UserEvent = EventName<"user">; // type UserEvent = "userChanged"
```

```ts
type Getter<T extends string> = `get${Capitalize<T>}`;
type UserGetter = Getter<"username">; // type UserGetter = "getUsername"
```
