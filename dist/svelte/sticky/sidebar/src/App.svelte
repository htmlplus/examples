<script>
  import '@htmlplus/core/faker.js';
  import '@htmlplus/core/grid-item.js';
  import '@htmlplus/core/grid.js';
  import '@htmlplus/core/sticky.js';
</script>

<div class="container">
  <header>Header</header>
  <plus-grid>
    <plus-grid-item xs="7">
      <plus-faker api="lorem.paragraphs" arguments={[10, '\n\n']}></plus-faker>
    </plus-grid-item>
    <plus-grid-item xs="5">
      <br />
      <plus-sticky>
        <aside>A Sticky Sidebar</aside>
      </plus-sticky>
    </plus-grid-item>
  </plus-grid>
</div>

<style>
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
