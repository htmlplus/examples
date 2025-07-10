<template>
  <div class="container">
    <header>Header</header>
    <main>
      <plus-faker api="lorem.paragraphs" :arguments="[10, '\n\n']"></plus-faker>
    </main>
    <aside>
      <plus-sticky>A Sticky Sidebar</plus-sticky>
    </aside>
  </div>
</template>

<script setup>
  import '@htmlplus/ui/faker.js';
  import '@htmlplus/ui/sticky.js';
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  .container {
    height: 20rem;
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
  }
  header,
  plus-sticky {
    background: lightgray;
    text-align: center;
    padding: 1rem;
  }
  header {
    flex: 0 0 100%;
  }
  main {
    flex: 0 0 60%;
    padding: 1rem;
    text-align: justify;
  }
  aside {
    flex: 0 0 40%;
    margin-top: 1rem;
  }
</style>
