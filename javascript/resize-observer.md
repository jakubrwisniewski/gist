# Resize Observer

```js
const box = document.querySelector(".box");

const observer = new ResizeObserver((entries) => {
	const width = entries[0].contentRect.width;
});

observer.observe(box);

// dispose
observer.disconnect();
```
