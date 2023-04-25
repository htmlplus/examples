```tsx [script]
import { Element, State } from '@htmlplus/element';

@Element()
class SwitchEvent {
  onChange(event) {
    window.alert(`Will be changed to ${event.target.checked ? 'On' : 'Off'}`);
  }
  render() {
    return (
      <plus-center>
        <plus-switch onPlusChange={(event) => this.onChange(event)}></plus-switch>
      </plus-center>
    );
  }
}
```

```html [javascript:template]
<plus-center>
  <plus-switch id="element1"></plus-switch>
</plus-center>
```

```js [javascript:script]
element1.addEventListener('plus-change', (event) => {
  window.alert(`Will be changed to ${event.target.checked ? 'On' : 'Off'}`);
});
```
