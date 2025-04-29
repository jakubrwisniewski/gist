# Use media query custom hook

```ts
import { useEffect, useState } from "react";

/**
 * Returns true, if is media query matches
 * @returns boolean
 */
export function useMediaQuery(mediaQuery: string) {
	const mediaQueryList = window.matchMedia(mediaQuery);
	const [matches, setMatches] = useState(mediaQueryList.matches);

	useEffect(() => {
		const controller = new AbortController();

		mediaQueryList.addEventListener(
			"change",
			(event) => {
				setMatches(event.matches);
			},
			{
				signal: controller.signal,
			}
		);

		return () => {
			controller.abort();
		};
	}, [mediaQueryList]);

	return matches;
}

```
