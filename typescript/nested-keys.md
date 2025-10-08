# NestedKeys and NestedPaths

```ts
type Leaves<T> = T extends object
	? {
			[K in keyof T]: `${Exclude<K, symbol>}${Leaves<T[K]> extends never ? "" : `.${Leaves<T[K]>}`}`;
	  }[keyof T]
	: never;
```

or

```ts
type DropInitDot<T> = T extends `.${infer U}` ? U : T;
type _Paths<T> = T extends object
	? {
			[K in (string | number) & keyof T]: `${`.${K}` | (`${K}` extends `${number}` ? `[${K}]` : never)}${
				| ""
				| _Paths<T[K]>}`;
	  }[(string | number) & keyof T]
	: never;

export type Paths<T> = DropInitDot<_Paths<T>>;
```

Which helps to achieve the following:

```ts
const Example = {
	top: {
		first: "",
		second: ""
	},
	bottom: {
		first: "",
		second: ""
	}
};

type ExampleKeys = Leaves<typeof Example>;
// "top.first" | "top.second" | "bottom.first" | "bottom.second";

type ExamplePaths = Paths<typeof Example>;
// "top" | "top.first" | "top.second" | "bottom" | "bottom.first" | "bottom.second";
```
