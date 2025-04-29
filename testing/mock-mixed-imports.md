# Mock mixed imports

```ts
// in item.tsx
import Item, { Type } from "./item";

// in test.tsx
jest.mock("./item", () => ({
    __esModule: true,
    Status: {},
    default: () => (
        <div>content</div>
    ),
}));
```
