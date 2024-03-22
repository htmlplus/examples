<template>
  <plus-click-outside @click="onClick" @plus-click-outside="onPlusClickOutside">
    <plus-card :elevation="10">
      <plus-card-body>
        <b ref="insideRef">0</b> time(s) inside clicked
        <br />
        <b ref="outsideRef">0</b> time(s) outside clicked
      </plus-card-body>
    </plus-card>
  </plus-click-outside>
</template>

<script setup>
  import { ref } from 'vue';

  import '@htmlplus/ui/card-body.js';
  import '@htmlplus/ui/card.js';
  import '@htmlplus/ui/click-outside.js';

  const outsideRef = ref();
  const insideRef = ref();
  const inside = ref(0);
  const outside = ref(0);
  function onClick() {
    const count = inside.value + 1;
    inside.value = count;
    insideRef.value.innerHTML = `${count}`;
  }
  function onPlusClickOutside() {
    const count = outside.value + 1;
    outside.value = count;
    outsideRef.value.innerHTML = `${count}`;
  }
</script>
