import { useEffect, useRef, useState } from 'react';

import '@htmlplus/core/card-body.js';
import '@htmlplus/core/card.js';
import '@htmlplus/core/click-outside.js';

function App() {
  const outsideRef = useRef();
  const clickOutsideRef = useRef();
  const insideRef = useRef();
  const [inside, setInside] = useState(0);
  const [outside, setOutside] = useState(0);
  useEffect(() => {
    function onClick() {
      const count = inside + 1;
      setInside(count);
      insideRef.current.innerHTML = `${count}`;
    }
    clickOutsideRef.current.addEventListener('click', onClick);
    return () => {
      clickOutsideRef.current.removeEventListener('click', onClick);
    };
  });
  useEffect(() => {
    function onPlusClickOutside() {
      const count = outside + 1;
      setOutside(count);
      outsideRef.current.innerHTML = `${count}`;
    }
    clickOutsideRef.current.addEventListener('plus-click-outside', onPlusClickOutside);
    return () => {
      clickOutsideRef.current.removeEventListener('plus-click-outside', onPlusClickOutside);
    };
  });
  return (
    <plus-click-outside ref={clickOutsideRef}>
      <plus-card elevation={10}>
        <plus-card-body>
          <b ref={insideRef}>0</b> time(s) inside clicked
          <br />
          <b ref={outsideRef}>0</b> time(s) outside clicked
        </plus-card-body>
      </plus-card>
    </plus-click-outside>
  );
}
export default App;
