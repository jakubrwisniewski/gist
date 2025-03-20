const pluralRules = new Intl.PluralRules("pl");

interface Rules {
  one: string;
  few: string;
  many: string;
}

type SingleRule = "one" | "few" | "many";

class PluralRules {
  private rules: Rules = { one: "", few: "", many: "" };

  constructor(one: string, few: string, many: string) {
    this.rules = { one, few, many };
  }

  format(value: number): string {
    const rule: SingleRule = pluralRules.select(value) as SingleRule;
    return this.rules[rule];
  }

  formatWithValue(value: number): string {
    const label = this.format(value);
    return `${value} ${label}`;
  }
}

export default PluralRules;
