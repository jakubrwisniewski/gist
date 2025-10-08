# Using

**TypeScript 5.2** will introduce a new keyword - 'using' - that you can use to dispose of anything with a `Symbol.dispose` function when it leaves scope.

```ts
{
  const getResource = () => {
    return {
      [Symbol.dispose]: () => {
        console.log('Hooray!')
      }
    }
  }
  using resource = getResource();
} // 'Hooray!' logged to console

```

You can also use `Symbol.asyncDispose` and `await using` to handle resources which need to be disposed asynchronously.

```ts
const getResource = () => ({
  [Symbol.asyncDispose]: async () => {
    await someAsyncFunc();
  },
});
{
  await using resource = getResource();
}
```

## Example:

Accessing the file system via file handlers in node could be a lot easier with using.

Without using:

```ts
import { open } from "node:fs/promises";
let filehandle;
try {
  filehandle = await open("thefile.txt", "r");
} finally {
  await filehandle?.close();
}
```

With using:

```ts
import { open } from "node:fs/promises";
const getFileHandle = async (path: string) => {
  const filehandle = await open(path, "r");
  return {
    filehandle,
    [Symbol.asyncDispose]: async () => {
      await filehandle.close();
    },
  };
};
{
  await using file = getFileHandle("thefile.txt");
  // Do stuff with file.filehandle
} // Automatically disposed!
```
