# Find type for element ref

Very useful to find type for ref for specific HTML element.

```ts
import { useRef, ElementRef } from "react";

const Component = () => {
	const audioRef = useRef<ElementRef<"audio">>(null);

	return <audio ref={audioRef}>...</audio>;
};
```
