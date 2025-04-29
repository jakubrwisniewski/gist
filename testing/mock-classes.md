# Mock classes

`file.js`

```js
class Example {
	get() { return "fake"; }
}

export default Example;
```

`file.test.js`

```js
import Example from "./file";

jest.mock("./file");

describe("Example", () => {
	it("should work", () => {
		jest.spyOn(Example.prototype, "get").mockReturnValue("mocked");

		const example = new Example();
		const result = example.get();

		expect(result).toEqual("mocked");
	});
});
```
