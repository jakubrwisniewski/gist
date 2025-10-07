# useHasTouch

```ts
import { useEffect, useState } from "react";

const useTouchDetection = () => {
  const matcher = window.matchMedia("(hover: none)");
	const [hasTouch, setHasTouch] = useState(matcher.matches);

	useEffect(() => {
		function handler(event: MediaQueryListEvent) {
			setHasTouch(event.matches);
		}

		matcher.addEventListener("change", handler);

		return () => {
			matcher.removeEventListener("change", handler);
		};
	}, []);

	return hasTouch;
};

export default useTouchDetection;
```


### Unit tests
```ts
import { act, renderHook } from "@testing-library/react";
import useTouchDetection from "./useTouchDetection";

const mockMatchMedia = {
	matches: false,
	media: "",
	onchange: null,
	addEventListener: jest.fn(),
	removeEventListener: jest.fn(),
	dispatchEvent: jest.fn(),
};

Object.defineProperty(window, "matchMedia", {
	writable: true,
	value: () => mockMatchMedia,
});

describe("useTouchDetection", () => {
	beforeEach(() => {
		let handler: any = null;

		mockMatchMedia.addEventListener.mockImplementation((name: unknown, callback: any) => {
			handler = callback;
		});
		mockMatchMedia.removeEventListener.mockImplementation(() => {
			handler = null;
		});
		mockMatchMedia.dispatchEvent.mockImplementation((matches) => {
			handler({ matches });
		});
	});

	it("should attach event at start and have false value, then remove listener when unmounted", () => {
		const { result, unmount } = renderHook(() => useTouchDetection());

		expect(result.current).toEqual(false);

		expect(mockMatchMedia.addEventListener).toHaveBeenCalled();

		unmount();

		expect(mockMatchMedia.removeEventListener).toHaveBeenCalled();
	});

	it("should change value when media value changes", () => {
		const { result } = renderHook(() => useTouchDetection());

		expect(result.current).toEqual(false);

		act(() => {
			mockMatchMedia.dispatchEvent(true);
		});

		expect(result.current).toEqual(true);

		act(() => {
			mockMatchMedia.dispatchEvent(false);
		});

		expect(result.current).toEqual(false);
	});
});
```
