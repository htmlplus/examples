import { useState } from 'react';

import { Card } from '@htmlplus/react';

function App() {
  const [elevation, setElevation] = useState(12);
  function onChange(event) {
    setElevation(event.target.value);
  }
  return (
    <>
      <Card elevation={elevation}></Card>
      <br />
      <input type="range" value={elevation} min="1" max="24" onChange={onChange} />
    </>
  );
}
export default App;
