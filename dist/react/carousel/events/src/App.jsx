import '@htmlplus/ui/carousel-button.js';
import '@htmlplus/ui/carousel-slide.js';
import '@htmlplus/ui/carousel-slides.js';
import '@htmlplus/ui/carousel.js';

function App() {
  return (
    <plus-carousel
      variant="presentation"
      draggable="free"
      focusable
      resizable
      onPlusDestroy={() => console.log('destroy')}
      onPlusInit={() => console.log('init')}
      onPlusPointerDown={() => console.log('pointer-down')}
      onPlusPointerUp={() => console.log('pointer-up')}
      onPlusReInit={() => console.log('re-init')}
      onPlusResize={() => console.log('resize')}
      onPlusScroll={() => console.log('scroll')}
      onPlusSelect={() => console.log('select')}
      onPlusSettle={() => console.log('settle')}
      onPlusSlideFocus={() => console.log('slide-focus')}
      onPlusSlideFocusStart={() => console.log('slide-focus-start')}
      onPlusSlidesChanged={() => console.log('slides-changed')}
      onPlusSlidesInView={() => console.log('slides-in-view')}
    >
      <plus-carousel-slides>
        <plus-carousel-slide>1</plus-carousel-slide>
        <plus-carousel-slide>2</plus-carousel-slide>
        <plus-carousel-slide>3</plus-carousel-slide>
        <plus-carousel-slide>4</plus-carousel-slide>
        <plus-carousel-slide>5</plus-carousel-slide>
      </plus-carousel-slides>
      <plus-carousel-button type="previous"></plus-carousel-button>
      <plus-carousel-button type="next"></plus-carousel-button>
    </plus-carousel>
  );
}
export default App;
