```css [style]
.container {
  position: relative;
}

.scrollable {
  height: 20em;
  overflow-y: auto;
}

plus-scroll-indicator {
  position: absolute;
  top: 0;
}
```

```html [template]
<div class="container">
  <plus-scroll-indicator source=".scrollable"></plus-scroll-indicator>
  <div class="scrollable">
    <plus-faker api="lorem.paragraphs" arguments='[15, "\n\n"]'></plus-faker>
  </div>
</div>
```

```json [settings]
{
  "dock": true
}
```

```json [settings]
{
  "dependencies": {
    "@faker-js/faker": "latest"
  }
}
```
