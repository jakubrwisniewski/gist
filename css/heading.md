# :heading

`:heading` is a pseudo-class that will select all headings within the scope (by default, the whole document). That means any h1, h2, h3, h4, h5, or h6 tag.

```css
:heading {
	color: red;
}
```

`:heading()` is a pseudo-class function that provides more flexibility than :heading as it takes a comma-separated list of one or more levels to select. For example, :heading(2, 3) will select all the h2 and h3, but not the h1.

```css
:heading(2, 3) {
	text-decoration: underline;
}
```

[Preview](preview/heading.html)

⛔ As of 17.09.2025 it's not supported by browsers. Check [CanIUse](https://caniuse.com/?search=%3Aheading)

