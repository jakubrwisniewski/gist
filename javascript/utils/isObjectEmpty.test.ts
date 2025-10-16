import { isObjectEmpty } from "./isObjectEmpty";

describe("isObjectEmpty", () => {
  it.each([
    [true, {}],
    [false, { a: 1 }],
    [false, { a: 1, b: 2 }],
  ])("should return %s when called with %j", (expected, object) => {
    const result = isObjectEmpty(object);

    expect(result).toEqual(expected);
  });
});
