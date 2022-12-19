```tsx [script]
import { Element } from '@htmlplus/element';

@Element()
class SignatureClear {
  render() {
    return (
      <>
        <plus-center>
          <plus-signature id="signature1" background-color="lightgray"></plus-signature>
        </plus-center>
        <br />
        <plus-center>
          <button onClick={() => window.signature1.clear()}>Clear</button>
        </plus-center>
      </>
    )
  }
}
```

```html [javascript:template]
<plus-center>
  <plus-signature id="signature1" background-color="lightgray"></plus-signature>
</plus-center>
<br />
<plus-center>
  <button onclick="signature1.clear()">Clear</button>
</plus-center>
```
