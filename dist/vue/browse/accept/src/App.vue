<template>
  <plus-center>
    <plus-browse accept=".jpg, .pdf, video/*">
      Click here to select a <b>jpg</b>, <b>pdf</b> or <b>video</b> file
    </plus-browse>
  </plus-center>
</template>

<script setup>
  import '@htmlplus/core/browse.js';
  import '@htmlplus/core/center.js';
</script>
