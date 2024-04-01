<template>
  <div>
    <plus-progress-bar color="lightseagreen" :value="50"></plus-progress-bar>
    <br />
    <plus-progress-bar color="#FFA500" :value="30"></plus-progress-bar>
    <br />
    <plus-progress-bar color="rgb(138,43,226)" :value="70"></plus-progress-bar>
  </div>
</template>

<script setup>
  import '@htmlplus/ui/progress-bar.js';
</script>
