# Attribute selectors

### Exact match
```css
a[class="link"] {}
```
```html
<a class="link">matched</a>
<a class="link selected">not matched</a>
```

### Any match
```css
a[class~="link"] {}
```
```html
<a class="link">matched</a>
<a class="link selected">also matched</a>
```

### Prefix match
```css
a[class|="link"] {}
```
```html
<a class="link">matched</a>
<a class="link selected">also matched</a>
<a class="link-selected">not matched</a>
<a class="another link">not matched</a>
```


### Starts with match
```css
a[class^="link"] {}
```
```html
<a class="link">matched</a>
<a class="link selected">also matched</a>
<a class="link-selected">also matched</a>
<a class="another link">not matched</a>
```


### Ends with match
```css
a[class$="link"] {}
```
```html
<a class="link">matched</a>
<a class="link selected">not matched</a>
<a class="link-selected">not matched</a>
<a class="another link">also matched</a>
<a class="another-link">also matched</a>
```

### Any occurence match
```css
a[class*="link"] {}
```
```html
<a class="link">matched</a>
<a class="link selected">also matched</a>
<a class="link-selected">also matched</a>
<a class="another link">also matched</a>
<a class="another-link">also matched</a>
<a class="bullshitlinkbutpresent">also matched</a>
```

## Examples
Display icon for PDF links
```css
a[href$=".pdf"]::before {
	content: url(images/pdf.svg);
}
```
