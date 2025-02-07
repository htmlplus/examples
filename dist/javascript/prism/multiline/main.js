import '@htmlplus/ui/prism.js';

requestAnimationFrame(() => {
  $prism.innerHTML =
    'class Person {\n  constructor(name) {\n    this.name = name;\n  }\n  sayHello() {\n    console.log(`Hello, my name is ${this.name}`);\n  }\n}';
});
