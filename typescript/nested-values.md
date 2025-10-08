# NestedValues

Use three custom utility types
```ts
type ValueOf<T> = T[keyof T];

type DeepValueOf<T extends Record<string, unknown>, Key = keyof T> = Key extends string
	? T[Key] extends Record<string, unknown>
		? DeepValueOf<T[Key]>
		: ValueOf<T>
	: never;

type NestedValues<T extends Record<string, unknown>> = Extract<DeepValueOf<T>, string>;
```

And use it with nested object:
```ts
const Example = {
	top: {
		first: "TOP.first",
		second: "TOP..second"
	},
	bottom: {
		first: "BOTTOM.first",
		second: "BOTTOM.second"
	}
};

const ExampleValue = NestedValues<typeof Example>;

const value: ExampleValue;
// "TOP.first" | "TOP.second" | "BOTTOM.first" | "BOTTOM.second"
```
