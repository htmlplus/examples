<template>
  <div class="container">
    <plus-sticky top="1rem" z-index="1">
      <plus-center>
        <div class="status">
          {{intersecting ? 'In Viewport' : 'Out of Viewport'}}
        </div>
      </plus-center>
    </plus-sticky>
    <plus-intersection @plus-change="onChange($event)">
      <plus-card elevation="10">
        <plus-card-body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </plus-card-body>
      </plus-card>
    </plus-intersection>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import '@htmlplus/core/card.js';
  import '@htmlplus/core/card-body.js';
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/intersection.js';
  import '@htmlplus/core/sticky.js';
  const intersecting = ref(false);
  function onChange(event) {
    intersecting.value = event.detail.isIntersecting;
  }
</script>

<style scoped>
  .container {
    background-color: #eeeeee;
    height: 20rem;
    overflow: auto;
  }

  .status {
    color: #fafafa;
    background-color: black;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
  }

  plus-card {
    width: 15rem;
    margin: auto;
  }

  plus-intersection {
    display: block;
    margin: 40rem auto;
  }
</style>
