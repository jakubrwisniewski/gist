# Remove document property

```js
db.users.updateMany(
	{},
	{
		$unset: {
			fieldToRemove: ""
		}
	}
);
```
