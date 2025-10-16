import PluralRules from "./PluralRules";

describe("PluralRules", () => {
  const rules = new PluralRules("pies", "psy", "psów");

  describe("format", () => {
    it.each([
      ["pies", 1],
      ["psy", 2],
      ["psy", 3],
      ["psy", 4],
      ["psów", 5],
      ["psów", 11],
    ])("should returns %s for %s", (expected, value) => {
      const result = rules.format(value);
      expect(result).toEqual(expected);
    });
  });

  describe("formatWithValue", () => {
    it.each([
      ["1 pies", 1],
      ["2 psy", 2],
      ["3 psy", 3],
      ["4 psy", 4],
      ["5 psów", 5],
      ["11 psów", 11],
    ])("should returns %s for %s", (expected, value) => {
      const result = rules.formatWithValue(value);
      expect(result).toEqual(expected);
    });
  });
});
