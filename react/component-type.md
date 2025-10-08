# ComponentType
for passing components as props

```ts
import { ComponentType } from "react";

type ExternalComponenProps = {
	title: string;
}

function LocalComponent({ Child }:{ Child: ComponentType<ExternalComponenProps> }) {
	return (
		<div>
			<Child title="title" />
		</div>
	);
};
```
