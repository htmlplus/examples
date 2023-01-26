```css [style]
plus-divider {
  --plus-divider-color: #5F9EE9;
  --plus-divider-width: 0.5rem;
  margin: 2rem 0;
}
```

```html [template]
<plus-grid align-items="center" justify-content="evenly">
  <plus-grid-item xs="5">
    <plus-faker></plus-faker>
  </plus-grid-item>
  <plus-divider vertical></plus-divider>
  <plus-grid-item xs="5">
    <plus-faker></plus-faker>
  </plus-grid-item>
</plus-grid>
```
