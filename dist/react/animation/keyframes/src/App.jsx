import { useEffect, useRef } from 'react';

import '@htmlplus/ui/animation.js';

function App() {
  const animationRef = useRef();
  useEffect(() => {
    animationRef.current.keyframes = [
      {
        transform: 'scale(0) rotate(0deg) translate(-50%, -50%)',
        opacity: '1'
      },
      {
        transform: 'scale(7) rotate(960deg) translate(-50%, -50%)',
        opacity: '0'
      }
    ];
  }, []);
  return (
    <div className="root">
      <plus-animation duration={5000} iterations={Infinity} run ref={animationRef}></plus-animation>
    </div>
  );
}
export default App;
