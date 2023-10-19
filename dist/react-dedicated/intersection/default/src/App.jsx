import { useRef } from 'react';

import { Card, Center, Faker, Intersection, Sticky } from '@htmlplus/react';

function App() {
  const statusRef = useRef();
  function onChange(event) {
    statusRef.current.innerHTML = event.detail.isIntersecting ? 'In Viewport' : 'Out of Viewport';
  }
  return (
    <div className="container">
      <Sticky top="1rem" zIndex={1}>
        <Center>
          <div className="status" ref={statusRef}></div>
        </Center>
      </Sticky>
      <Intersection onChange={onChange}>
        <Card elevation={10}>
          <Card.Body>
            <Faker></Faker>
          </Card.Body>
        </Card>
      </Intersection>
    </div>
  );
}
export default App;
