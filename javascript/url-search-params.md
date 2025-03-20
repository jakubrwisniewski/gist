# URLSearchParams


### append

```js
const searchParams = new URLSearchParams();
searchParams.append("key", "something");
searchParams.append("id", "123")

searchParams.toString(); // "key=something&id=123"
```

***

### get

```js
const urlSearchParams = new URLSearchParams(location.search);
urlSearchParams.get("key"); // string | null
```

***

### has

```js
const urlSearchParams = new URLSearchParams(location.search);
urlSearchParams.has("key"); // true | false
```

***


### size

```js
const urlSearchParams = new URLSearchParams(location.search);
const size = urlSearchParams.size; // number
```

