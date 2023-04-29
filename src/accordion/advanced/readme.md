```html [template]
<plus-accordion>
  <plus-stack slot="summary" justify-content="space-between">
    <span>Summary</span>
    <button>Action</button>
  </plus-stack>
  <plus-faker></plus-faker>
</plus-accordion>
```

```css [style]
[slot='summary'] {
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
