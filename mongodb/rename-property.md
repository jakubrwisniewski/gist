# Rename property

```js
db.users.updateOne(
	{},
	{
		$rename: {
			firstToRename: "firstRenamed",
			secondToRename: "secondRenamed"
		}
	}
);
```
