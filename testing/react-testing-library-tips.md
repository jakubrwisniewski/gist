# React Testing Library Tips

### getByRole
```html
<button>Click</button>
```

```js
const button = screen.getByRole('button', { name: 'Click' });
```

### getByLabelText
```html
<label for="name">Name</label>
<input type="text" id="name" />
```

```js
const name = screen.getByLabelText('Name');
```

### getByPlaceholderText
```html
<input type="text" placeholder="Search..." />
```

```js
const search = screen.getByPlaceholderText('Search...');
```

### within
We can sometimes have more than one UI element of the same type showing at the same time: search inputs, delete buttons, expand/collapse buttons… Here, we're using the `within` function from React Testing Library to query inside our container.

```html
<section data-testid="settingsPane">
  <h2>Settings</h2>
  <input type="Search..." />
</section>
```

```js
const settingsPane = within(
  screen.getByTestId('settingsPane')
);
const search = settingsPane.getByPlaceholder('Search...');
```
