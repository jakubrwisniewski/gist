# HSL relative colors

```css
p {
  color: hsl(from red h s l); /* exactly the same */;
  color: hsl(from red h s 50%); /* 50% light of the red */
  color: hsl(from red h s 50% / 0.8); /* extra opacity */
  color: hsl(from red h s calc(l + 10)); /* calculated from based value */
}
```

Also works with CSS variables

```css
:root {
  --primary-color: blue;
}

p {
  color: hsl(from var(--primary-color) h s 80%)
}
```
