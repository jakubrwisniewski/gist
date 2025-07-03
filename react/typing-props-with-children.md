# Typing props with children

```ts
import { PropsWithChildren } from 'react'

type Props = {
  title: string
}

function ProductTile({ title, children }: PropsWithChildren<Props>) {
  return (
    <div>
      <div>{title}</div>
      {children}
    </div>
  )
}
```

The `PropsWithChildren` interface is described as

```ts
type PropsWithChildren<P = unknown> P & {
	children?: ReactNode | undefined;
}
```
