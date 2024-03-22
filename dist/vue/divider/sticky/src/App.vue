<template>
  <div class="container">
    <plus-sticky>
      <plus-divider>
        <span>Today</span>
      </plus-divider>
    </plus-sticky>
    <plus-sticky>
      <plus-divider>
        <span>Yesterday</span>
      </plus-divider>
    </plus-sticky>
    <plus-sticky>
      <plus-divider>
        <span>5 Days Ago</span>
      </plus-divider>
    </plus-sticky>
    <plus-sticky>
      <plus-divider>
        <span>2 Weeks Ago</span>
      </plus-divider>
    </plus-sticky>
    <plus-sticky>
      <plus-divider>
        <span>1 Month Ago</span>
      </plus-divider>
    </plus-sticky>
  </div>
</template>

<script setup>
  import '@htmlplus/ui/divider.js';
  import '@htmlplus/ui/sticky.js';
</script>

<style scoped>
  .container {
    height: 20rem;
    overflow: auto;
  }
  span {
    background-color: white;
    padding: 0 0.5rem;
  }
  plus-divider {
    gap: 0;
  }
  plus-sticky {
    margin-bottom: 20rem;
  }
</style>
