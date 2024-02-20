<script>
  import '@htmlplus/core/divider.js';
  import '@htmlplus/core/sticky.js';
</script>

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

<style>
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
