```tsx [script]
import { Element } from '@htmlplus/element';

@Element()
class CounterNumerals {
  render() {
    return (
      <plus-center>
        <plus-counter
          numerals={['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']}
          to="1000"
          play
        ></plus-counter>
      </plus-center>
    )
  }
}
```

```html [javascript:template]
<plus-center>
  <plus-counter id="counter2" to="1000" play></plus-counter>
</plus-center>
```

```js [javascript:script]
counter2.numerals = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
```
