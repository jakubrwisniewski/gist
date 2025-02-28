[back](../README.md)

# Abort Controller

[caniuse.com](https://caniuse.com/abortcontroller)

### Setup

```js
const controller = new AbortController();

controller.signal;
controller.abort();
```

***

### Cancel event listeners

```js
const controller = new AbortController();

window.addEventListener('resize', listener, { signal: controller.signal });

controller.abort();
```

***

### Cancel many event listeners at once (with React useEffect)

```js
useEffect(() => {
  const controller = new AbortController();

  window.addEventListener('resize', handleResize, {
    signal: controller.signal,
  });
  window.addEventListener('hashchange', handleHashChange, {
    signal: controller.signal,
  });
  window.addEventListener('storage', handleStorageChange, {
    signal: controller.signal,
  });

  return () => {
    // Calling `.abort()` removes ALL event listeners
    // associated with `controller.signal`. Gone!
    controller.abort();
  };
}, []);
```

***

### Cancel fetch requests

```js
function uploadFile(file: File) {
  const controller = new AbortController();

  // Provide the abort signal to this fetch request
  // so it can be aborted anytime be calling `controller.abort()`.
  const response = fetch('/upload', {
    method: 'POST',
    body: file,
    signal: controller.signal,
  });

  return { response, abort: controller.abort }
}
```

***

### AbortSignal.timeout
Timeout requests

```js
fetch(url, {
  // Abort this request automatically if it takes
  // more than 3000ms to complete.
  signal: AbortSignal.timeout(3000),
})
```

***

### AbortSignal.any
Handle multiple signals at once

```js
const publicController = new AbortController()
const internalController = new AbortController()

channel.addEventListener('message', handleMessage, {
  signal: AbortSignal.any([publicController.signal, internalController.signal]),
})
```
