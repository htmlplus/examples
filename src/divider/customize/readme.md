```css [style]
plus-divider {
  --plus-divider-color: darkgray;
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

```json [settings]
{
  "dependencies": {
    "@faker-js/faker": "latest"
  }
}
```
