```css [style]
div {
  position: relative;
}
```

```html [template]
<div>
    <plus-faker api="lorem.paragraphs"></plus-faker>
    <plus-floating offset={[20, 20]}>
        <plus-icon name="circle-fill"></plus-icon>
    </plus-floating>
</div>
```

```json [settings]
{
  "dependencies": {
    "@faker-js/faker": "latest"
  }
}
```
