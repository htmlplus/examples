<script>
  import '@htmlplus/ui/carousel-button.js';
  import '@htmlplus/ui/carousel-slide.js';
  import '@htmlplus/ui/carousel-slides.js';
  import '@htmlplus/ui/carousel.js';
</script>

<plus-carousel variant="presentation" draggable="snap">
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

<style>
  plus-carousel-slide {
    flex-basis: 70% !important;
  }
</style>
