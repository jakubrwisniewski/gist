# Regex Capture groups

Before:

```js
const email = "jakub@gmail.com";
const domain = email.match(/([a-z]+)@(.+)/)[2];
console.log(domain); // gmail.com
```

After:

```js
const email = "jakub@gmail.com";
const match = email.match(/(?<user>[a-z]+)@(?<domain>.+)/);
console.log(match.groups); // {user: 'jakub', domain: 'gmail.com'}
console.log(match.groups.domain); // gmail.com
```
