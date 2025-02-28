# BroadcastChannel

```js
const channel = new BroadcastChannel('test');

channel.onmessage = (event) => {
    console.log(event.data);
};

channel.postMessage('message');

channel.close();
```
