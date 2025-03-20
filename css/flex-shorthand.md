# Flex shorthand property
The CSS `flex: 1 1 0` shorthand property combines three flex properties into one declaration:

* **flex-grow: 1** - The item can grow if necessary. A value of 1 means all items will grow equally to fill available space.
* **flex-shrink: 1** - The item can shrink if necessary. A value of 1 means all items will shrink equally if there's not enough space.
* **flex-basis: 0** - Sets the initial main size of the flex item. A value of 0 means the item's size is calculated purely based on content.

This combination effectively tells the flex item to:
* Grow to fill available space (flex-grow: 1)
* Shrink if needed (flex-shrink: 1)
* Start with no base size (flex-basis: 0)

It's commonly used to create equally sized flex items, regardless of their content.

```css
.flex-item {
  flex: 1 1 0;
}
```

> [!NOTE]
> This is equivalent to writing out each property separately: `flex-grow: 1; flex-shrink: 1; flex-basis: 0;`

