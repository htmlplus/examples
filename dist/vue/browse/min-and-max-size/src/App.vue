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
    const { errors, file } = event.detail.files[0];
    if (errors?.length) {
      alert(errors[0].message);
    } else {
      alert(`File '${file.name}' selected.`);
    }
  }
</script>
