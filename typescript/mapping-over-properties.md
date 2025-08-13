# Mapping over properties

Consider this type
```ts
interface Product {
	id: number;
	name: string;
	active: boolean;
}
```

With TypeScript we can transform all fields to different type
```ts
type StringifiedProduct = {
  [P in keyof Product]: string;
};
```
