<template>
  <div>
    <plus-progress-bar sync ref="syncRef"></plus-progress-bar>
    <br />
    <plus-progress-bar ref="latencyRef"></plus-progress-bar>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';

  import '@htmlplus/ui/progress-bar.js';

  const latencyRef = ref();
  const syncRef = ref();
  function update() {
    if (!syncRef.value || !latencyRef.value) return;
    const value = Math.random() * 100;
    syncRef.value.value = value;
    latencyRef.value.value = value;
    setTimeout(() => update(), 100);
  }
  onMounted(() => {
    update();
  });
</script>
