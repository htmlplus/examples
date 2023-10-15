import { useRef, useState } from 'react';

import { Card, ClickOutside } from '@htmlplus/react';

function App() {
  const outsideRef = useRef();
  const insideRef = useRef();
  const [inside, setInside] = useState(0);
  const [outside, setOutside] = useState(0);
  function onClick() {
    const count = inside + 1;
    setInside(count);
    insideRef.current.innerHTML = `${count}`;
  }
  function onClickOutside() {
    const count = outside + 1;
    setOutside(count);
    outsideRef.current.innerHTML = `${count}`;
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
