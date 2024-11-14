import { useEffect, useRef } from 'react';

import '@htmlplus/ui/app-progress-bar.js';

function App() {
  const appProgressBar3Ref = useRef();
  const appProgressBar2Ref = useRef();
  const appProgressBar1Ref = useRef();
  useEffect(() => {
    requestAnimationFrame(() => {
      appProgressBar1Ref.current.start();
      appProgressBar2Ref.current.start();
      appProgressBar3Ref.current.start();
    });
  }, []);
  return (
    <>
      <plus-app-progress-bar
        minimum={0.25}
        trickle-disabled
        ref={appProgressBar1Ref}
      ></plus-app-progress-bar>
      <br />
      <plus-app-progress-bar
        minimum={0.5}
        trickle-disabled
        ref={appProgressBar2Ref}
      ></plus-app-progress-bar>
      <br />
      <plus-app-progress-bar
        minimum={0.75}
        trickle-disabled
        ref={appProgressBar3Ref}
      ></plus-app-progress-bar>
    </>
  );
}
export default App;
