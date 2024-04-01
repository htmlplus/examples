import { useEffect, useRef } from 'react';

import '@htmlplus/ui/progress-bar.js';

function App() {
  const latencyRef = useRef();
  const syncRef = useRef();
  function update() {
    if (!syncRef.current || !latencyRef.current) return;
    const value = Math.random() * 100;
    syncRef.current.value = value;
    latencyRef.current.value = value;
    setTimeout(() => update(), 100);
  }
  useEffect(() => {
    update();
  }, []);
  return (
    <>
      <plus-progress-bar sync ref={syncRef}></plus-progress-bar>
      <br />
      <plus-progress-bar ref={latencyRef}></plus-progress-bar>
    </>
  );
}
export default App;
