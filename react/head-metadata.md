# Document Metadata Management

In React 19, you can render `<title>`, `<meta>`, and `<link>` elements directly anywhere inside your components without any wrapper components or third-party libraries (like React Helmet).

React automatically hoists these tags to the document `<head>` and manages deduplication based on rules (such as matching `name` or `property`).

```jsx
function BlogPost({ post }) {
  return (
    <article>
      <title>{post.title}</title>
      <meta name="description" content={post.summary} />
      <link rel="canonical" href={post.url} />

      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
```
