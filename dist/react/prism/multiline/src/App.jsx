import { useEffect, useRef } from 'react';

import '@htmlplus/ui/prism.js';

function App() {
  const prismRef = useRef();
  useEffect(() => {
    requestAnimationFrame(() => {
      prismRef.current.innerHTML =
        'class Person {\n  constructor(name) {\n    this.name = name;\n  }\n  sayHello() {\n    console.log(`Hello, my name is ${this.name}`);\n  }\n}';
    });
  }, []);
  return <plus-prism sync ref={prismRef}></plus-prism>;
}
export default App;
