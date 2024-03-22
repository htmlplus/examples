import { useState } from 'react';

import '@htmlplus/ui/card-body.js';
import '@htmlplus/ui/card.js';
import '@htmlplus/ui/center.js';
import '@htmlplus/ui/click-outside.js';

function App() {
  const [hidden, setHidden] = useState(true);
  function onClick() {
    setHidden(!hidden);
  }
  function onPlusClickOutside() {
    setHidden(true);
  }
  return (
    <plus-center>
      <plus-click-outside onplus-click-outside={onPlusClickOutside}>
        <button onclick={onClick}>Open Menu Dropdown</button>
        <plus-card elevation={10} hidden={hidden} outlined>
          <plus-card-body> It will stay visible until you click outside. </plus-card-body>
        </plus-card>
      </plus-click-outside>
    </plus-center>
  );
}
export default App;
