import { useState } from 'react';
import { Card, Center, Faker, Intersection, Sticky } from '@htmlplus/react';
const IntersectionDefault = () => {
  const [intersecting, setIntersecting] = useState(false);
  const onChange = (event) => {
    setIntersecting(event.detail.isIntersecting);
  };
  return (
    <div className="container">
      <Sticky top="1rem" zIndex="1">
        <Center>
          <div className="status">
            {intersecting ? 'In Viewport' : 'Out of Viewport'}
          </div>
        </Center>
      </Sticky>
      <Intersection onChange={(event) => onChange(event)}>
        <Card elevation="10">
          <Card.Body>
            <Faker></Faker>
          </Card.Body>
        </Card>
      </Intersection>
    </div>
  );
};
export default IntersectionDefault;
