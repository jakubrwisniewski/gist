# Selecing siblings

```css
/* Next element */
li.selected + li {}

/* Prev element */
li:has(+ li.selected) {}

/* All next elements */
li.selected ~ li {}

/* All prev elements */
li:has(~ li.selected) {}
```

[Preview](preview/selecting-siblings.html)
