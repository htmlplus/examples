```css [style]
.container {
  position: relative;
}
.scrollable {
  padding: 1rem;
  height: 20em;
  overflow-y: auto;
}
```

```tsx [script]
import { Element, State } from '@htmlplus/element';

@Element()
class ScrollDetectorScrollIndicator {
  @State()
  value = 0;

  onChange(event) {
    this.value = event.detail.progress;
  }

  render() {
    return (
      <div class="container">
        <plus-progress-bar value={this.value}></plus-progress-bar>
        <div class="scrollable" id="reference2">
          <plus-faker
            api="lorem.paragraphs"
            arguments='[20, "\n\n"]'
            seed={0}
          ></plus-faker>
        </div>
        <plus-scroll-detector
          reference="#reference2"
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
  <plus-progress-bar id="progressbar2"></plus-progress-bar>
  <div class="scrollable" id="reference2">
    <plus-faker api="lorem.paragraphs" arguments='[20, "\n\n"]' seed="0"></plus-faker>
  </div>
  <plus-scroll-detector id="scroll2" reference="#reference2" vertical></plus-scroll-detector>
</div>
```

```js [javascript:script]
scroll2.addEventListener('plus-change', (event) => {
  progressbar2.value = event.detail.progress;
})
```

```json [settings]
{
  "dependencies": {
    "@faker-js/faker": "latest"
  },
  "dock": true
}
```
