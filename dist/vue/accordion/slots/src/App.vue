<template>
  <plus-stack align-items="stretch" gap="1rem" vertical>
    <div>
      <plus-accordion summary="Summary" open>
        <plus-progress-bar
          variant="indeterminate"
          style="height: 2px"
          slot="top"
        ></plus-progress-bar>
        <plus-faker :seed="0"></plus-faker>
      </plus-accordion>
    </div>
    <div>
      <plus-accordion summary="Summary" open>
        <plus-progress-bar
          variant="indeterminate"
          style="height: 2px"
          slot="middle"
        ></plus-progress-bar>
        <plus-faker :seed="0"></plus-faker>
      </plus-accordion>
    </div>
    <div>
      <plus-accordion summary="Summary" open>
        <plus-progress-bar
          variant="indeterminate"
          style="height: 2px"
          slot="bottom"
        ></plus-progress-bar>
        <plus-faker :seed="0"></plus-faker>
      </plus-accordion>
    </div>
  </plus-stack>
</template>

<script setup>
  import '@htmlplus/ui/accordion.js';
  import '@htmlplus/ui/faker.js';
  import '@htmlplus/ui/progress-bar.js';
  import '@htmlplus/ui/stack.js';
</script>
