<template>
  <div class="container">
    <header>Header</header>
    <plus-grid>
      <plus-grid-item xs="7">
        <plus-faker api="lorem.paragraphs" :arguments="[10, '\n\n']"></plus-faker>
      </plus-grid-item>
      <plus-grid-item xs="5">
        <br />
        <plus-sticky>
          <aside>A Sticky Sidebar</aside>
        </plus-sticky>
      </plus-grid-item>
    </plus-grid>
  </div>
</template>

<script setup>
  import '@htmlplus/ui/faker.js';
  import '@htmlplus/ui/grid-item.js';
  import '@htmlplus/ui/grid.js';
  import '@htmlplus/ui/sticky.js';
</script>

<style scoped>
  .container {
    height: 20rem;
    overflow: auto;
  }
  aside,
  header {
    background: lightgray;
    text-align: center;
    padding: 1rem;
  }
  plus-faker {
    display: block;
    padding: 1rem;
    text-align: justify;
  }
</style>
