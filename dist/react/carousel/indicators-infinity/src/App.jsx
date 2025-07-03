import '@htmlplus/ui/carousel-button.js';
import '@htmlplus/ui/carousel-indicators.js';
import '@htmlplus/ui/carousel-slide.js';
import '@htmlplus/ui/carousel-slides.js';
import '@htmlplus/ui/carousel.js';

function App() {
  return (
    <plus-carousel variant="presentation">
      <plus-carousel-slides>
        <plus-carousel-slide>1</plus-carousel-slide>
        <plus-carousel-slide>2</plus-carousel-slide>
        <plus-carousel-slide>3</plus-carousel-slide>
        <plus-carousel-slide>4</plus-carousel-slide>
        <plus-carousel-slide>5</plus-carousel-slide>
        <plus-carousel-slide>6</plus-carousel-slide>
        <plus-carousel-slide>7</plus-carousel-slide>
        <plus-carousel-slide>8</plus-carousel-slide>
        <plus-carousel-slide>9</plus-carousel-slide>
      </plus-carousel-slides>
      <plus-carousel-button type="previous"></plus-carousel-button>
      <plus-carousel-button type="next"></plus-carousel-button>
      <plus-carousel-indicators infinity></plus-carousel-indicators>
    </plus-carousel>
  );
}
export default App;
