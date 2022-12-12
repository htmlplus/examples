```css [style]
plus-spinner[size=sm] {
  width: 24px;
  height: 24px;
}
plus-spinner[size=md] {
  width: 48px;
  height: 48px;
}
plus-spinner[size=lg] {
  width: 72px;
  height: 72px;
}
```

```html [template]
<plus-grid align-items="center" justify-content="evenly">
  <plus-grid-item>
    <plus-spinner size="sm"></plus-spinner>
  </plus-grid-item>
  <plus-grid-item>
    <plus-spinner size="md"></plus-spinner>
  </plus-grid-item>
  <plus-grid-item>
    <plus-spinner size="lg"></plus-spinner>
  </plus-grid-item>
</plus-grid>
```
