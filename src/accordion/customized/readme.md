```html [template]
<div>
  <plus-accordion summary="First">
    <plus-faker></plus-faker>
  </plus-accordion>
  <plus-accordion summary="Second">
    <plus-faker></plus-faker>
  </plus-accordion>
  <plus-accordion summary="Third">
    <plus-faker></plus-faker>
  </plus-accordion>
</div>
```

```css [style]
plus-accordion {
  border: 0;
  border-radius: 0;
}
plus-accordion:not(:last-of-type) {
  border-bottom: solid 2px lightgray;
}
plus-accordion::part(body),
plus-accordion::part(svg) {
  transition: all 0.5s ease-out;
}
plus-accordion::part(header) {
  column-gap: 0.5rem;
  flex-direction: row-reverse;
  padding-left: 0;
}
plus-accordion[state^='expand']::part(header) {
  font-weight: bold;
}
plus-accordion[state^='expand']::part(svg) {
  fill: gray;
  transform: rotate(90deg);
}
plus-accordion[state^='collap']::part(svg) {
  fill: gray;
  transform: rotate(0deg);
}
```

```json [settings]
{
  "dependencies": {
    "@faker-js/faker": "latest"
  }
}
```
