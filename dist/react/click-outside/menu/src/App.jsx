import { useEffect, useRef, useState } from 'react';

import '@htmlplus/core/card-body.js';
import '@htmlplus/core/card.js';
import '@htmlplus/core/center.js';
import '@htmlplus/core/click-outside.js';

function App() {
  const clickOutsideRef = useRef();
  const [hidden, setHidden] = useState(true);
  function onClick() {
    setHidden(!hidden);
  }
  useEffect(() => {
    if (!clickOutsideRef.current) return;
    function onPlusClickOutside() {
      setHidden(true);
    }
    clickOutsideRef.current.addEventListener('plus-click-outside', onPlusClickOutside);
    return () => {
      if (!clickOutsideRef.current) return;
      clickOutsideRef.current.removeEventListener('plus-click-outside', onPlusClickOutside);
    };
  });
  return (
    <plus-center>
      <plus-click-outside ref={clickOutsideRef}>
        <button onClick={onClick}>Open Menu Dropdown</button>
        <plus-card elevation={10} hidden={hidden} outlined>
          <plus-card-body> It will stay visible until you click outside. </plus-card-body>
        </plus-card>
      </plus-click-outside>
    </plus-center>
  );
}
export default App;
