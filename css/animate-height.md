# Animate Height

### Calc size approach

```css
.box {
  height: 0;
  transition: height 0.5s ease;
  overflow: hidden;
}
.box.show {
  height: auto;
  height: calc-size(auto, size);
}
```

[Preview](preview/animate-height.html)

> [!WARNING]
> As of 2025.03.20 only Chrome and Edge supports it, see [here](https://caniuse.com/mdn-css_types_calc-size)

### Interpolate size approach

```css
.box {
    overflow: hidden;
    height: auto;
    transition: height 0.3s;
    interpolate-size: allow-keywords;  /* Enables smooth height animation */
}

.box.collapsed {
    height: 0;
}
```

> [!WARNING]
> As of 2025.03.20 only Chrome and Edge supports it, see [here](https://caniuse.com/mdn-css_properties_interpolate-size)
