# Animation starting style

!! This is not checked


The new `@starting-style` rule solves a common animation challenge. When elements hidden with display: none become visible, their entrance animations often fail to trigger. This rule lets you define initial styles for elements when they're first rendered, perfect for dialogs, popovers, and other dynamic content.

```css
.dialog {
    display: none;
    transform: translateY(0);
    opacity: 1;
    transition: transform 0.3s, opacity 0.3s;
}

@starting-style {
    .dialog {
        transform: translateY(20px);
        opacity: 0;
    }
}

.dialog.open {
    display: block;  /* Will now animate smoothly from the starting style */
}
```
