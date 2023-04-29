```css [style]

plus-breadcrumb a {
  color: inherit;
  text-decoration: none;
}
plus-breadcrumb a:hover {
  text-decoration: underline;
}
```

```html [template]
<plus-center>
  <plus-breadcrumb separator="-" max={2} expander-text="Show more">
    <plus-icon slot="expander" name="chevron-compact-right"></plus-icon>
    <a href="#">HTMLPLUS</a>
    <a href="#">Core</a>
    <a href="#">UI Components</a>
    <a href="#">Breadcrumb</a>
  </plus-breadcrumb>
</plus-center>
```
