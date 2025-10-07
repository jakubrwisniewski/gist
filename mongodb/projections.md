# Projections
Projection is a way to select only the fields you need from a document. This can help reduce the amount of data you need to transfer and speed up your queries as you're only fetching the data you need.

```ts
db.collection.find({}, { username: 1, email: 1 });
```

Above query will output data as only, even if documents has other fields.

```ts
{ username: string; email: string }
```
