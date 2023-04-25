```css [style]
.title {
  color: deeppink;
  margin: 0;
  font-weight: normal;
  font-size: 1em;
  margin: 1em 0;
}
plus-card {
  padding: 1em;
}
plus-card p {
  margin: 0;
}
```

```html [template]
<>
  <plus-portal target="#before" strategy="before">
    <h1 class="title">
      Before the card
    </h1>
  </plus-portal>
  <plus-card outlined id="before">
    <plus-faker></plus-faker>
  </plus-card>
  <br />
  <plus-portal target="#prepend" strategy="prepend">
    <h1 class="title">
      Prepend the card
    </h1>
  </plus-portal>
  <plus-card outlined id="prepend">
    <plus-faker></plus-faker>
  </plus-card>
  <br />
  <plus-portal target="#append" strategy="append">
    <h1 class="title">
      Append the card
    </h1>
  </plus-portal>
  <plus-card outlined id="append">
    <plus-faker></plus-faker>
  </plus-card>
  <br />
  <plus-portal target="#after" strategy="after">
    <h1 class="title">
      After the card
    </h1>
  </plus-portal>
  <plus-card outlined id="after">
    <plus-faker></plus-faker>
  </plus-card>
</>
```

```json [settings]
{
  "dependencies": {
    "@faker-js/faker": "latest"
  }
}
```
