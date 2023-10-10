<template>
  <div class="container">
    <plus-sticky top="1rem" :z-index="1">
      <plus-center>
        <div class="status" ref="statusRef"></div>
      </plus-center>
    </plus-sticky>
    <plus-intersection @plus-change="onPlusChange">
      <plus-card :elevation="10">
        <plus-card-body>
          <plus-faker></plus-faker>
        </plus-card-body>
      </plus-card>
    </plus-intersection>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  import '@htmlplus/core/card-body.js';
  import '@htmlplus/core/card.js';
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/faker.js';
  import '@htmlplus/core/intersection.js';
  import '@htmlplus/core/sticky.js';

  const statusRef = ref();
  function onPlusChange(event) {
    statusRef.value.innerHTML = event.detail.isIntersecting ? 'In Viewport' : 'Out of Viewport';
  }
</script>

<style scoped>
  .container {
    background-color: whitesmoke;
    height: 20rem;
    overflow: auto;
  }

  .status {
    color: white;
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
