import { useEffect, useRef } from 'react';

import '@htmlplus/ui/faker.js';

function App() {
  const plusFakerRef = useRef();
  useEffect(() => {
    plusFakerRef.current.arguments = [5, '\n\n'];
  }, []);
  return <plus-faker api="lorem.paragraphs" ref={plusFakerRef}></plus-faker>;
}
export default App;
