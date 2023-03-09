```css [style]
.container {
  position: relative;
}
.scrollable {
  height: 20em;
  overflow-y: auto;
}
```

```tsx [script]
import { Element } from '@htmlplus/element';

@Element()
class ScrollDetectorDefault {
  onChange(event) {
    console.log(event.detail);
  }
  render() {
    return (
      <div class="container">
        <div class="scrollable">
          <plus-faker api="lorem.paragraphs" arguments='[20, "\n\n"]'></plus-faker>
        </div>
        <plus-scroll-detector
          reference=".scrollable"
          vertical
          onPlusChange={(event) => this.onChange(event)}
        >
        </plus-scroll-detector>
      </div>
    )
  }
}
```

```html [javascript:template]
<div class="container">
  <div class="scrollable">
    <plus-faker api="lorem.paragraphs" arguments='[20, "\n\n"]'></plus-faker>
  </div>
  <plus-scroll-detector id="scroll1" reference=".scrollable" vertical></plus-scroll-detector>
</div>
```

```js [javascript:script]
scroll1.addEventListener('plus-change', (event) => {
  console.log(event.detail)
})
```

```json [settings]
{
  "dock": true
}
```
