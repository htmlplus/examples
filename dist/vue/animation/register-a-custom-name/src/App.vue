<template>
  <div class="root">
    <plus-avatar shape="circle" size="xl">
      <plus-animation
        delay="0000"
        duration="2000"
        iterations="Infinity"
        name="custom-pulse"
        run
      ></plus-animation>
      <plus-animation
        delay="1000"
        duration="2000"
        iterations="Infinity"
        name="custom-pulse"
        run
      ></plus-animation>
      <img src="http://placeimg.com/94/94/people" />
    </plus-avatar>
  </div>
</template>

<script setup>
  import '@htmlplus/core/animation.js';
  import '@htmlplus/core/avatar.js';
  import { setConfig } from '@htmlplus/core/config.js';
  setConfig({
    component: {
      'plus-animation': {
        asset: {
          name: {
            'custom-pulse': [
              {
                offset: 0,
                opacity: '0.6',
                transform: 'scale(1.0)'
              },
              {
                offset: 1,
                opacity: '0.0',
                transform: 'scale(1.5)'
              }
            ]
          }
        }
      }
    }
  });
</script>

<style scoped>
  .root {
    text-align: center;
    padding: 1.5rem;
  }
  plus-animation {
    border: solid 5px black;
    display: inline-block;
    position: absolute;
    inset: 0;
    border-radius: 50%;
    z-index: -1;
  }
</style>
