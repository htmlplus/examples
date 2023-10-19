import { useState } from 'react';

import { Card, Center, ClickOutside } from '@htmlplus/react';

function App() {
  const [hidden, setHidden] = useState(true);
  function onClick() {
    setHidden(!hidden);
  }
  function onClickOutside() {
    setHidden(true);
  }
  return (
    <Center>
      <ClickOutside onClickOutside={onClickOutside}>
        <button onClick={onClick}>Open Menu Dropdown</button>
        <Card elevation={10} hidden={hidden} outlined>
          <Card.Body> It will stay visible until you click outside. </Card.Body>
        </Card>
      </ClickOutside>
    </Center>
  );
}
export default App;
