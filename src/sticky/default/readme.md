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

```html [template] [dock]
<div class="container">
  <plus-faker type="lorem.paragraphs"></plus-faker>
  <plus-sticky>
    <plus-faker></plus-faker>
  </plus-sticky>
  <plus-faker type="lorem.paragraphs" arguments='[20, "\n\n"]'></plus-faker>
</div>
```
