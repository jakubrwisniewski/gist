# React Testing Library Tips

To debug the whole HTML use
```js
screen.debug();
```

It’s also possible to pass container as property to debug part of HTML
```js
screen.debug(screen.getByText("..."));
```

Another way is to manually catch HTML node and use `prettyPrint` to view HTML
```js
import { prettyDOM}  from '@testing-library/dom'

const div = document.createElement('div')
div.innerHTML = '<div><h1>Hello World</h1></div>'
console.log(prettyDOM(div))
// <div>
//   <h1>Hello World</h1>
// </div>
```

Inside unit test with React Testing Library use
```js
screen.logTestingPlaygroundURL()
```

to launch url with testing playground with ability to visually search for queries
