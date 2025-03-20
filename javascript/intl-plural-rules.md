# Intl.PluralRules

```js
const pluralRules = new Intl.PluralRules('pl-PL');

const rules = {
    one: 'odcinek',
    few: 'odcinki',
    many: 'odcinków'
};

rules[pluralRules.select(1)]; // odcinek
rules[pluralRules.select(2)]; // odcinki
rules[pluralRules.select(5)]; // odcinków
```
