<script>
  import '@htmlplus/core/avatar.js';
  import '@htmlplus/core/center.js';
</script>

<plus-center>
  <plus-avatar size="xxl">
    <div slot="bottom">bottom</div>
    <div slot="center">center</div>
    <div slot="left">left</div>
    <div slot="left-bottom">left-bottom</div>
    <div slot="left-top">left-top</div>
    <div slot="right">right</div>
    <div slot="right-bottom">right-bottom</div>
    <div slot="right-top">right-top</div>
    <div slot="top">top</div>
  </plus-avatar>
  <plus-avatar size="xxl">
    <div slot="bottom">bottom</div>
    <div slot="center">center</div>
    <div slot="end">end</div>
    <div slot="end-bottom">end-bottom</div>
    <div slot="end-top">end-top</div>
    <div slot="start">start</div>
    <div slot="start-bottom">start-bottom</div>
    <div slot="start-top">start-top</div>
    <div slot="top">top</div>
  </plus-avatar>
</plus-center>

<style>
  plus-avatar > div {
    background-color: gray;
    color: white;
    font-size: 10px;
    padding: 0.25rem;
    font-family: monospace;
  }
  plus-center {
    gap: 8rem;
  }
</style>
