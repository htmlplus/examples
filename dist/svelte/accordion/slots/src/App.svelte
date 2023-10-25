<script>
  import '@htmlplus/core/accordion.js';
  import '@htmlplus/core/faker.js';
  import '@htmlplus/core/progress-bar.js';
  import '@htmlplus/core/stack.js';
</script>

<plus-stack align-items="stretch" gap="1rem" vertical>
  <div>
    <plus-accordion summary="Summary" open>
      <plus-progress-bar variant="indeterminate" slot="top"></plus-progress-bar>
      <plus-faker seed={0}></plus-faker>
    </plus-accordion>
  </div>
  <div>
    <plus-accordion summary="Summary" open>
      <plus-progress-bar variant="indeterminate" slot="middle"></plus-progress-bar>
      <plus-faker seed={0}></plus-faker>
    </plus-accordion>
  </div>
  <div>
    <plus-accordion summary="Summary" open>
      <plus-progress-bar variant="indeterminate" slot="bottom"></plus-progress-bar>
      <plus-faker seed={0}></plus-faker>
    </plus-accordion>
  </div>
</plus-stack>

<style>
  plus-progress-bar {
    height: 2px;
  }
</style>
