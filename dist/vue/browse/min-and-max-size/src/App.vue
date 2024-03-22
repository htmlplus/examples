<template>
  <plus-center>
    <plus-browse :min-size="1000000" :max-size="5000000" @plus-change="onPlusChange">
      Click Here
    </plus-browse>
  </plus-center>
</template>

<script setup>
  import '@htmlplus/ui/browse.js';
  import '@htmlplus/ui/center.js';

  function onPlusChange(event) {
    if (event.detail.files?.[0]?.errors.length) {
      alert(event.detail.files[0].errors[0].message);
    }
  }
</script>
