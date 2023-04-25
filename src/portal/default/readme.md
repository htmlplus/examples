```css [style]
#target { color: blue }
#source { color: red  }
```

```html [template]
<>
  <div id="target"></div>
  <div id="source">
    <plus-portal target="#target">
      <plus-faker></plus-faker>
    </plus-portal>
  </div>
</>
```

```json [settings]
{
  "dependencies": {
    "@faker-js/faker": "latest"
  }
}
```
