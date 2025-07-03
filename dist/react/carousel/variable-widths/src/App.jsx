import '@htmlplus/ui/carousel-button.js';
import '@htmlplus/ui/carousel-slide.js';
import '@htmlplus/ui/carousel-slides.js';
import '@htmlplus/ui/carousel.js';

function App() {
  return (
    <plus-carousel variant="presentation">
      <plus-carousel-slides>
        <plus-carousel-slide
          style={{
            flexBasis: '60%'
          }}
        >
          1
        </plus-carousel-slide>
        <plus-carousel-slide
          style={{
            flexBasis: '40%'
          }}
        >
          2
        </plus-carousel-slide>
        <plus-carousel-slide
          style={{
            flexBasis: '30%'
          }}
        >
          3
        </plus-carousel-slide>
        <plus-carousel-slide
          style={{
            flexBasis: '90%'
          }}
        >
          4
        </plus-carousel-slide>
        <plus-carousel-slide
          style={{
            flexBasis: '35%'
          }}
        >
          5
        </plus-carousel-slide>
        <plus-carousel-slide
          style={{
            flexBasis: '55%'
          }}
        >
          6
        </plus-carousel-slide>
        <plus-carousel-slide
          style={{
            flexBasis: '85%'
          }}
        >
          7
        </plus-carousel-slide>
        <plus-carousel-slide
          style={{
            flexBasis: '50%'
          }}
        >
          8
        </plus-carousel-slide>
        <plus-carousel-slide
          style={{
            flexBasis: '35%'
          }}
        >
          9
        </plus-carousel-slide>
      </plus-carousel-slides>
      <plus-carousel-button type="previous"></plus-carousel-button>
      <plus-carousel-button type="next"></plus-carousel-button>
    </plus-carousel>
  );
}
export default App;
