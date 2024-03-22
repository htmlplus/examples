import { useEffect, useRef, useState } from 'react';

import '@htmlplus/ui/faker.js';
import '@htmlplus/ui/progress-bar.js';
import '@htmlplus/ui/scroll-detector.js';

function App() {
  const plusFakerRef = useRef();
  const detectorRef = useRef();
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!detectorRef.current) return;
    function onPlusChange(event) {
      setValue(event.detail.progress);
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
      <plus-progress-bar value={value}></plus-progress-bar>
      <div className="scrollable reference2">
        <plus-faker api="lorem.paragraphs" seed={0} ref={plusFakerRef}></plus-faker>
      </div>
      <plus-scroll-detector
        reference=".reference2"
        vertical
        ref={detectorRef}
      ></plus-scroll-detector>
    </div>
  );
}
export default App;
