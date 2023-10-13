import { useRef, useState } from 'react';

import { Card, ClickOutside } from '@htmlplus/react';

function App() {
  const outsideRef = useRef();
  const insideRef = useRef();
  const [inside, setInside] = useState(0);
  const [outside, setOutside] = useState(0);
  function onClick() {
    setInside(inside + 1);
    insideRef.current.innerHTML = `${inside}`;
  }
  function onClickOutside() {
    setOutside(outside + 1);
    outsideRef.current.innerHTML = `${outside}`;
  }
  return (
    <ClickOutside onClick={onClick} onClickOutside={onClickOutside}>
      <Card elevation={10}>
        <Card.Body>
          <b ref={insideRef}>0</b> time(s) inside clicked
          <br />
          <b ref={outsideRef}>0</b> time(s) outside clicked
        </Card.Body>
      </Card>
    </ClickOutside>
  );
}
export default App;
