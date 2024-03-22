<template>
  <div>
    <plus-progress-bar :min="0.0" :max="1.0" :value="0.25"></plus-progress-bar>
    <br />
    <plus-progress-bar :min="-10" :max="+10" :value="0.0"></plus-progress-bar>
  </div>
</template>

<script setup>
  import '@htmlplus/ui/progress-bar.js';
</script>
