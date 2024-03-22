<template>
  <div class="container">
    <br />
    <plus-sticky watcher>
      <header slot="normal">Normal Header</header>
      <header slot="stick">Stick Header</header>
    </plus-sticky>
    <plus-faker api="lorem.paragraphs" :arguments="[20, '\n\n']"></plus-faker>
  </div>
</template>

<script setup>
  import '@htmlplus/ui/faker.js';
  import '@htmlplus/ui/sticky.js';
</script>

<style scoped>
  .container {
    height: 20rem;
    overflow: auto;
  }
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
  plus-sticky[state='normal'] header {
    border-radius: 4px;
    margin: 1rem;
  }
</style>
