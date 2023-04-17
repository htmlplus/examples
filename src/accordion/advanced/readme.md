```html [template]
<plus-accordion>
  <div slot="summary">
    <span>Summary</span>
    <button>Action</button>
  </div>
  <plus-faker></plus-faker>
</plus-accordion>
```

```css [style]
[slot="summary"] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  margin-right: 1rem;
}
```

```json [settings]
{
  "dependencies": {
    "@faker-js/faker": "latest"
  }
}
```
