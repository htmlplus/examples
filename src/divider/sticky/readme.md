```css [style]
.container {
  height: 20rem;
  overflow: auto;
}
span {
  background-color: white;
  color: black;
  padding: 0.5rem 1rem;
}
plus-divider {
  --plus-divider-color: lightgray;
  --plus-divider-opacity: 1;
}
plus-sticky {
  margin-bottom: 20rem;
}
```

```html [template] [dock]
<div class="container">
  <plus-sticky>
    <plus-divider>
      <span>Today</span>
    </plus-divider>
  </plus-sticky>
  <plus-sticky>
    <plus-divider>
      <span>Yesterday</span>
    </plus-divider>
  </plus-sticky>
  <plus-sticky>
    <plus-divider>
      <span>5 Days Ago</span>
    </plus-divider>
  </plus-sticky>
  <plus-sticky>
    <plus-divider>
      <span>2 Weeks Ago</span>
    </plus-divider>
  </plus-sticky>
  <plus-sticky>
    <plus-divider>
      <span>1 Month Ago</span>
    </plus-divider>
  </plus-sticky>
</div>
```
