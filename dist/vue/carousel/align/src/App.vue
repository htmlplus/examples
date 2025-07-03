<template>
  <div>
    <plus-carousel variant="presentation" align="start" :start-index="2">
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
    <br />
    <plus-carousel variant="presentation" align="center" :start-index="2">
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
    <br />
    <plus-carousel variant="presentation" align="end" :start-index="2">
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
  </div>
</template>

<script setup>
  import '@htmlplus/ui/carousel-button.js';
  import '@htmlplus/ui/carousel-slide.js';
  import '@htmlplus/ui/carousel-slides.js';
  import '@htmlplus/ui/carousel.js';
</script>

<style scoped>
  plus-carousel-slide {
    flex-basis: 70% !important;
  }
</style>
