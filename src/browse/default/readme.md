```css [style]
plus-browse {
  background: white;
  border: 2px dashed lightgray;
  border-radius: 4px;
  display: block;
  padding: 3rem;
  text-align: center;
}
plus-browse[dragging]:not([dragging=false]) {
  border-color: darkgray;
}
```

```tsx [script]
import { Element } from '@htmlplus/element';

@Element()
class BrowseDefault {
  onChange(event) {
    const name = event.detail.files[0].file.name;
    alert(`File '${name}' selected.`);
  }
  render() {
    return (
      <plus-browse
        droppable
        onPlusChange={(event) => this.onChange(event)}
      >
        Click or Drag & Drop a file(s) here
      </plus-browse>
    );
  }
}
```

```html [javascript:template]
<plus-browse id="element" droppable>
  Click or Drag & Drop a file(s) here
</plus-browse>
```

```js [javascript:script]
const onChange = (event) => {
  const name = event.detail.files[0].file.name;
  alert(`File '${name}' selected.`);
};
element.addEventListener('plus-change', onChange);
```
