import '@htmlplus/ui/carousel-slide.js';
import '@htmlplus/ui/carousel-slides.js';
import '@htmlplus/ui/carousel.js';

function App() {
  return (
    <plus-carousel variant="presentation" draggable="snap" loop tween-factor-base={0.2}>
      <plus-carousel-slides>
        <plus-carousel-slide>
          <img src="https://picsum.photos/id/319/600/350" />
        </plus-carousel-slide>
        <plus-carousel-slide>
          <img src="https://picsum.photos/id/755/600/350" />
        </plus-carousel-slide>
        <plus-carousel-slide>
          <img src="https://picsum.photos/id/203/600/350" />
        </plus-carousel-slide>
        <plus-carousel-slide>
          <img src="https://picsum.photos/id/743/600/350" />
        </plus-carousel-slide>
        <plus-carousel-slide>
          <img src="https://picsum.photos/id/212/600/350" />
        </plus-carousel-slide>
      </plus-carousel-slides>
    </plus-carousel>
  );
}
export default App;
