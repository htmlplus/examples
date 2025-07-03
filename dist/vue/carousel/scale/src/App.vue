<template>
  <plus-carousel variant="presentation" loop :tween-factor-base="0.52" draggable="free">
    <plus-carousel-slides>
      <plus-carousel-slide><div>1</div></plus-carousel-slide>
      <plus-carousel-slide><div>2</div></plus-carousel-slide>
      <plus-carousel-slide><div>3</div></plus-carousel-slide>
      <plus-carousel-slide><div>4</div></plus-carousel-slide>
      <plus-carousel-slide><div>5</div></plus-carousel-slide>
    </plus-carousel-slides>
    <plus-carousel-button type="previous"></plus-carousel-button>
    <plus-carousel-button type="next"></plus-carousel-button>
  </plus-carousel>
</template>

<script setup>
  import '@htmlplus/ui/carousel-button.js';
  import '@htmlplus/ui/carousel-slide.js';
  import '@htmlplus/ui/carousel-slides.js';
  import '@htmlplus/ui/carousel.js';
</script>

<style scoped>
  plus-carousel-slide {
    flex-basis: 55% !important;
    background-color: transparent !important;
  }
  plus-carousel-slide div {
    background-color: whitesmoke;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    transform: scale(var(--plus-carousel-factor-2));
  }
</style>
