# Polymorphic components

```tsx
type PolyProps<C extends React.ElementType> = {
	component?: C;
	children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<C>;

function Poly<C extends React.ElementType>(props: PolyProps<C>) {
	const Component = props?.component || "div";
	return <Component {...props}>{props.children}</Component>
}
```
