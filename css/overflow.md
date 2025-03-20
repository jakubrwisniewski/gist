# Overflow

Overflow clip is a better option than overflow auto, with more customization options.

```css
overflow: clip;
```

1.  `overflow-clip-margin: 20px` allows to overflow for a certain value after a container
2.  `overflow-clip-margin: border-box;` overflows content until the end of border
3.  `overflow-clip-margin: padding-box;` overflows content until the end of padding
4.  `overflow-clip-margin: content-box` overflows content until the actual available content (padding is preserved)

[Preview](preview/overflow.html)
