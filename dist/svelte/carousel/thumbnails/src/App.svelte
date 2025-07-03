<script>
  import '@htmlplus/ui/carousel-button.js';
  import '@htmlplus/ui/carousel-slide.js';
  import '@htmlplus/ui/carousel-slides.js';
  import '@htmlplus/ui/carousel.js';
</script>

<plus-carousel variant="presentation" id="my-carousel">
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
</plus-carousel>
<br />
<plus-carousel
  variant="presentation"
  class="mirror"
  draggable="free"
  mirror="my-carousel"
  mirror-type="click-smooth"
>
  <plus-carousel-slides>
    <plus-carousel-slide clickable>1</plus-carousel-slide>
    <plus-carousel-slide clickable>2</plus-carousel-slide>
    <plus-carousel-slide clickable>3</plus-carousel-slide>
    <plus-carousel-slide clickable>4</plus-carousel-slide>
    <plus-carousel-slide clickable>5</plus-carousel-slide>
    <plus-carousel-slide clickable>6</plus-carousel-slide>
    <plus-carousel-slide clickable>7</plus-carousel-slide>
    <plus-carousel-slide clickable>8</plus-carousel-slide>
    <plus-carousel-slide clickable>9</plus-carousel-slide>
  </plus-carousel-slides>
</plus-carousel>

<style>
  plus-carousel.mirror plus-carousel-slide {
    flex-basis: 6rem !important;
    height: 6rem !important;
  }
</style>
