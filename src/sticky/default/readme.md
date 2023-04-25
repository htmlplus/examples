```css [style]
.container {
  height: 20rem;
  overflow: auto;
}
plus-faker {
  display: block;
  padding: 1rem;
  text-align: justify;
}
plus-sticky {
  background-color: gold;
}
```

```html [template]
<div class="container">
  <plus-faker api="lorem.paragraphs"></plus-faker>
  <plus-sticky>
    <plus-faker></plus-faker>
  </plus-sticky>
  <plus-faker api="lorem.paragraphs" arguments='[20, "\n\n"]'></plus-faker>
</div>
```

```json [settings]
{
  "dependencies": {
    "@faker-js/faker": "latest"
  },
  "dock": true
}
```
