import { useState } from 'react';

import '@htmlplus/core/card.js';

function App() {
  const [elevation, setElevation] = useState(12);
  function onChange(event) {
    setElevation(event.target.value);
  }
  return (
    <>
      <plus-card elevation={elevation}></plus-card>
      <br />
      <input type="range" value={elevation} min="1" max="24" onChange={onChange} />
    </>
  );
}
export default App;
