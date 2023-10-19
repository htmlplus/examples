import { useRef } from 'react';

import { Counter, Intersection } from '@htmlplus/react';

function App() {
  const counterRef = useRef();
  function onChange(event) {
    counterRef.current.play = event.detail.isIntersecting;
  }
  return (
    <div className="container">
      <Intersection onChange={onChange}>
        <Counter to={1000} ref={counterRef}></Counter>
      </Intersection>
    </div>
  );
}
export default App;
