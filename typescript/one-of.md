# OneOf

This helper allows to pick one type from list of types

```ts
type MergeTypes<TypesArray extends any[], Res = {}> = TypesArray extends [
  infer Head,
  ...infer Rem
]
  ? MergeTypes<Rem, Res & Head>
  : Res;

type OneOf<
  TypesArray extends any[],
  Res = never,
  AllProperties = MergeTypes<TypesArray>
> = TypesArray extends [infer Head, ...infer Rem]
  ? OneOf<Rem, Res | OnlyFirst<Head, AllProperties>, AllProperties>
  : Res;
```

Example:
```ts
type BaseMessage = { id: string; timestamp: number };
type TextMessage = BaseMessage & { text: string };
type ImgMessage = BaseMessage & { imgPath: string };
type UrlMessage = BaseMessage & { url: string };

const what: OneOf<[TextMessage, UrlMessage, ImgMessage]> = {
  id: "1",
  timestamp: 20,
  imgPath: "",
  // text: "pies",
};
```
