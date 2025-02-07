<template>
  <plus-prism sync ref="prismRef"></plus-prism>
</template>

<script setup>
  import { onMounted, ref } from 'vue';

  import '@htmlplus/ui/prism.js';

  const prismRef = ref();
  onMounted(() => {
    requestAnimationFrame(() => {
      prismRef.value.innerHTML =
        'class Person {\n  constructor(name) {\n    this.name = name;\n  }\n  sayHello() {\n    console.log(`Hello, my name is ${this.name}`);\n  }\n}';
    });
  });
</script>
