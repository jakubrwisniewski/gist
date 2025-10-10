# Document Metadata Management

As of React 19 we can do as the following, to setup head metadata tags in a convienient way

```js
import { DocumentHead } from 'react';

function SEOPage() {
  return (
    <DocumentHead>
      <title>Custom Title - React 19</title>
      <meta name="description" content="Learn about the new features of React 19." />
    </DocumentHead>
  );
}
```
