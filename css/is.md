# `:is` pseudo-class selector

Old Code
```css
section p,
article p {
	font-size: 1rem;
}
```

New code

```css
:is(article, section) p {
	font-size: 1rem;
}
```

[Preview](preview/is.html)
