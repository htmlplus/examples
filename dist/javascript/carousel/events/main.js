import '@htmlplus/ui/carousel-button.js';
import '@htmlplus/ui/carousel-slide.js';
import '@htmlplus/ui/carousel-slides.js';
import '@htmlplus/ui/carousel.js';

$carousel.addEventListener('plus-destroy', () => console.log('destroy'));
$carousel.addEventListener('plus-init', () => console.log('init'));
$carousel.addEventListener('plus-pointer-down', () => console.log('pointer-down'));
$carousel.addEventListener('plus-pointer-up', () => console.log('pointer-up'));
$carousel.addEventListener('plus-re-init', () => console.log('re-init'));
$carousel.addEventListener('plus-resize', () => console.log('resize'));
$carousel.addEventListener('plus-scroll', () => console.log('scroll'));
$carousel.addEventListener('plus-select', () => console.log('select'));
$carousel.addEventListener('plus-settle', () => console.log('settle'));
$carousel.addEventListener('plus-slide-focus', () => console.log('slide-focus'));
$carousel.addEventListener('plus-slide-focus-start', () => console.log('slide-focus-start'));
$carousel.addEventListener('plus-slides-changed', () => console.log('slides-changed'));
$carousel.addEventListener('plus-slides-in-view', () => console.log('slides-in-view'));
