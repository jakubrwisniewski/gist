import { isLeapYear } from "./isLeapYear";

describe("isYeapYear", () => {
  it.each([
    [true, 2000],
    [false, 2001],
    [false, 2002],
    [false, 2003],
    [true, 2004],
    [false, 2100],
  ])("should returns %s for %s", (expected, year) => {
    const result = isLeapYear(year);
    expect(result).toEqual(expected);
  });
});
