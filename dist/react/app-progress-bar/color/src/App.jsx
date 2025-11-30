import { useEffect, useRef } from 'react';

import '@htmlplus/ui/app-progress-bar.js';

function App() {
  const appProgressBarRef = useRef();
  useEffect(() => {
    requestAnimationFrame(() => {
      appProgressBarRef.current?.start();
    });
    setTimeout(() => {
      appProgressBarRef.current?.done();
    }, 5000);
  }, []);
  return <plus-app-progress-bar color="#d63939" ref={appProgressBarRef}></plus-app-progress-bar>;
}
export default App;
