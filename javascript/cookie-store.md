# Cookie Store

Set cookie

```js
try {
	await cookieStore.set('theme', 'dark');
} catch (err) {
	// a nice benefit of the Cookie Store API is immediate errors,
	// instead of needing to round-trip writing and reading
}
```

Delete cookie

```js
cookieStore.delete('theme');
}
```

Listen to changes

```ts
cookieStore.addEventListener('change', (event: CookieChangeEvent) => {
	console.log(event);
	// event.changed -> CookieListItem[]
	// event.deleted -> CookieListItem[]
});
```
