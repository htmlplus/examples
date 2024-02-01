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
    function onPlusClickOutside() {
      setHidden(true);
    }
    clickOutsideRef.current.addEventListener('PlusClickOutside', onPlusClickOutside);
    return () => {
      clickOutsideRef.current.removeEventListener('PlusClickOutside', onPlusClickOutside);
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
