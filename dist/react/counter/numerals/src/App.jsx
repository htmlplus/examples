import { useEffect, useRef } from 'react';

import '@htmlplus/core/center.js';
import '@htmlplus/core/counter.js';

function App() {
  const counterRef = useRef();
  useEffect(() => {
    counterRef.current.numerals = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  }, []);
  return (
    <plus-center>
      <plus-counter to={1000} play ref={counterRef}></plus-counter>
    </plus-center>
  );
}
export default App;
