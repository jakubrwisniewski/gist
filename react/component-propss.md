# Component props

Component props based on HTML element

```ts
type ButtonProps = React.ComponentProps<"button">;
type InputProps = React.ComponentProps<"input">;
```

Component props based on another component props

```ts
type SubmitButtonProps = React.ComponentProps<typeof SubmitButton>;
```
