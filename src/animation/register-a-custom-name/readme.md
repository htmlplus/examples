```css [style]
plus-avatar {
  margin: 1.5rem;
}
plus-animation {
  border: solid 3px black;
  display: inline-block;
  position: absolute;
  inset: 0;
  border-radius: 50%;
  z-index: -1;
}
```

```js [config]
import { setConfig } from '@htmlplus/core/config.js';

setConfig({
  component: {
    'plus-animation': {
      asset: {
        name: {
          'custom-pulse': [
            { offset: 0, opacity: '0.6', transform: 'scale(1.00)' },
            { offset: 1, opacity: '0.0', transform: 'scale(1.60)' }
          ]
        }
      }
    }
  }
});
```

```tsx [script]
import { Element } from '@htmlplus/element';

@Element()
class AnimationRegisterACustomName {
  render() {
    return (
      <plus-center>
        <plus-avatar shape="circle">
          <plus-animation delay="0000" duration="2000" iterations="Infinity" name="custom-pulse" run></plus-animation>
          <plus-animation delay="1000" duration="2000" iterations="Infinity" name="custom-pulse" run></plus-animation>
          <img src="https://picsum.photos/id/64/90/90" />
        </plus-avatar>
      </plus-center>
    )
  }
}
```
