```css [style]
div {
  position: relative;
}
```

```html [template]
<div>
    <plus-faker api="lorem.paragraphs"></plus-faker>
    <br />
    <br />
    <br />
    <plus-floating placement="bottom">
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
