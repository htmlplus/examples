import { useRef, useState } from 'react';

import '@htmlplus/core/card-body.js';
import '@htmlplus/core/card.js';
import '@htmlplus/core/click-outside.js';

function App() {
  const outsideRef = useRef();
  const insideRef = useRef();
  const [inside, setInside] = useState(0);
  const [outside, setOutside] = useState(0);
  function onClick() {
    setInside(inside + 1);
    insideRef.current.innerHTML = `${inside}`;
  }
  function onPlusClickOutside() {
    setOutside(outside + 1);
    outsideRef.current.innerHTML = `${outside}`;
  }
  return (
    <plus-click-outside onclick={onClick} onplus-click-outside={onPlusClickOutside}>
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
