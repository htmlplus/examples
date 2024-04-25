<template>
  <plus-tabs value="tab-1">
    <plus-tabs-panels>
      <plus-tabs-panel value="tab-1">
        <b>Tab One</b>
        <br />
        <plus-faker></plus-faker>
      </plus-tabs-panel>
      <plus-tabs-panel value="tab-2">
        <b>Tab Two</b>
        <br />
        <plus-faker></plus-faker>
      </plus-tabs-panel>
      <plus-tabs-panel value="tab-3">
        <b>Tab Three</b>
        <br />
        <plus-faker></plus-faker>
      </plus-tabs-panel>
    </plus-tabs-panels>
    <plus-tabs-bar>
      <plus-tabs-tab value="tab-1">Tab 1</plus-tabs-tab>
      <plus-tabs-tab value="tab-2">Tab 2</plus-tabs-tab>
      <plus-tabs-tab value="tab-3">Tab 3</plus-tabs-tab>
    </plus-tabs-bar>
  </plus-tabs>
</template>

<script setup>
  import '@htmlplus/ui/faker.js';
  import '@htmlplus/ui/tabs-bar.js';
  import '@htmlplus/ui/tabs-panel.js';
  import '@htmlplus/ui/tabs-panels.js';
  import '@htmlplus/ui/tabs-tab.js';
  import '@htmlplus/ui/tabs.js';
</script>
