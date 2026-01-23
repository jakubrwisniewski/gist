# node:timers

### Native sleep

```js
import { setTimeout as sleep } from "node:timers/promises";

async function someting() {
  // ...
  await sleep(5000); // wait for 5s
  // ...
}
```
