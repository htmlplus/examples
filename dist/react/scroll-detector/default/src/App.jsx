import { useEffect, useRef } from 'react';

import '@htmlplus/ui/faker.js';
import '@htmlplus/ui/scroll-detector.js';

function App() {
  const plusFakerRef = useRef();
  const detectorRef = useRef();
  useEffect(() => {
    if (!detectorRef.current) return;
    function onPlusChange(event) {
      console.log(event.detail);
    }
    detectorRef.current.addEventListener('plus-change', onPlusChange);
    return () => {
      if (!detectorRef.current) return;
      detectorRef.current.removeEventListener('plus-change', onPlusChange);
    };
  });
  useEffect(() => {
    plusFakerRef.current.arguments = [20, '\n\n'];
  }, []);
  return (
    <div className="container">
      <div className="scrollable reference1">
        <plus-faker api="lorem.paragraphs" ref={plusFakerRef}></plus-faker>
      </div>
      <plus-scroll-detector
        reference=".reference1"
        vertical
        ref={detectorRef}
      ></plus-scroll-detector>
    </div>
  );
}
export default App;
