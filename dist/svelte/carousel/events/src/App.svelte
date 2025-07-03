<script>
  import '@htmlplus/ui/carousel-button.js';
  import '@htmlplus/ui/carousel-slide.js';
  import '@htmlplus/ui/carousel-slides.js';
  import '@htmlplus/ui/carousel.js';
</script>

<plus-carousel
  variant="presentation"
  draggable="free"
  focusable
  resizable
  on:plus-destroy={() => console.log('destroy')}
  on:plus-init={() => console.log('init')}
  on:plus-pointer-down={() => console.log('pointer-down')}
  on:plus-pointer-up={() => console.log('pointer-up')}
  on:plus-re-init={() => console.log('re-init')}
  on:plus-resize={() => console.log('resize')}
  on:plus-scroll={() => console.log('scroll')}
  on:plus-select={() => console.log('select')}
  on:plus-settle={() => console.log('settle')}
  on:plus-slide-focus={() => console.log('slide-focus')}
  on:plus-slide-focus-start={() => console.log('slide-focus-start')}
  on:plus-slides-changed={() => console.log('slides-changed')}
  on:plus-slides-in-view={() => console.log('slides-in-view')}
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
