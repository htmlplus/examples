To see all easings click [here](https://github.com/htmlplus/core/blob/main/src/components/animation/animation.constants.ts).

```css [style]
plus-animation {
  background: lightgray;
  width: 100px;
  height: 100px;
  margin: auto;
}
```

```html [template]
<plus-grid justify-content="evenly" gutter="md">
  <plus-grid-item xs="12" sm="auto">
    <plus-animation easing="ease-in" iterations="Infinity" name="fade-in" run></plus-animation>
  </plus-grid-item>
  <plus-grid-item xs="12" sm="auto">
    <plus-animation easing="ease-out" iterations="Infinity" name="fade-in" run></plus-animation>
  </plus-grid-item>
</plus-grid>
```
