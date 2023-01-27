```css [style]
.container {
  position: relative;
  height: 20rem;
  overflow: auto;
  background-color: #eeeeee;
}

plus-intersection {
  display: block;
  text-align: center;
  margin: 1000px auto;
}

img {
  display: block;
  width: 12rem;
  height: 12rem;
  object-fit: cover;
  margin: 0;
}

plus-card {
  display: inline-block;
}

plus-spinner {
  margin: 1rem;
}
```

```tsx [script]
import { Element } from '@htmlplus/element';

@Element()
class IntersectionLazyImage {
  onChange(event) {
    if (!event.detail.isIntersecting) return;

    setTimeout(() => {
      const image = event.target.querySelector('img');

      const spinner = event.target.querySelector('plus-spinner');

      const src = image.getAttribute('data-src');

      image.setAttribute('src', src);

      image.hidden = false;

      spinner.hidden = true;
    }, 1000);
  }

  render() {
    return (
      <div class="container">
        <plus-intersection
          once
          onPlusChange={(event) => this.onChange(event)}
        >
          <plus-card elevation="10">
            <plus-spinner></plus-spinner>
            <img
              alt="Lazy Image"
              hidden
              data-src="https://placekitten.com/200/200"
            />
          </plus-card>
        </plus-intersection>
      </div>
    );
  }
}
```

```html [javascript:template]
<div class="container">
  <plus-intersection id="intersection2" once>
    <plus-card elevation="10">
      <plus-spinner></plus-spinner>
      <img
        alt="Lazy Image"
        hidden
        data-src="https://placekitten.com/200/200"
      />
    </plus-card>
  </plus-intersection>
</div>
```

```js [javascript:script]
intersection2.addEventListener('plus-change', (event) => {
  if (!event.detail.isIntersecting) return;

  setTimeout(() => {
    const image = event.target.querySelector('img');

    const spinner = event.target.querySelector('plus-spinner');

    const src = image.getAttribute('data-src');

    image.setAttribute('src', src);

    image.hidden = false;

    spinner.hidden = true;
  }, 1000);
});
```

```json [settings]
{
  "dock": true
}
```
