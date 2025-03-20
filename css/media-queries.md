# Media Queries

## Device types
```css
@media screen {}
/* for devices with screens, like monitors, tablets, and phones */

@media print {}
/* for printers and print preview mode */

@media all {}
/* the default value that applies to all device */

@media speech {}
/* for screen readers that narrate the content of a page */
```


## Operators
```css
@media screen and /* condition */ and /* condition */ {}

@media screen, /* condition */, /* condition */ {}

/* Apply styles when the screen is not in landscape orientation */
@media not screen and (orientation: landscape) { /* CSS Styles... */ }
```

## Media operators
```css
@media (width: 0px) {}
@media (height: 0px) {}
@media (min-width: 0px) {}
@media (max-width: 0px) {}
@media (min-height: 0px) {}
@media (max-height: 0px) {}
```

## Orientation
```css
@media (orientation: landscape) {}
@media (orientation: portrait) {}
```


## Aspect ration and resolution
```css
/* For displays with aspect ratio 16/9 */
@media screen and (device-aspect-ratio: 16/9) {}

/* For displays with aspect ration 1336/768 */
@media screen and (device-aspect-ratio: 1336/768) {}

/* For displays */
@media screen and (min-resolution: 2dppx) {}

/* For printing */
@media print and (min-resolution: 300dpi) {}
```





