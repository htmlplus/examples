import { useState } from 'react';
import '@htmlplus/core/card.js';
import '@htmlplus/core/card-body.js';
import '@htmlplus/core/center.js';
import '@htmlplus/core/intersection.js';
import '@htmlplus/core/sticky.js';
const IntersectionDefault = () => {
  const [intersecting, setIntersecting] = useState(false);
  const onChange = (event) => {
    setIntersecting(event.detail.isIntersecting);
  };
  return (
    <div className="container">
      <plus-sticky top="1rem" z-index="1">
        <plus-center>
          <div className="status">
            {intersecting ? 'In Viewport' : 'Out of Viewport'}
          </div>
        </plus-center>
      </plus-sticky>
      <plus-intersection onplus-change={(event) => onChange(event)}>
        <plus-card elevation="10">
          <plus-card-body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </plus-card-body>
        </plus-card>
      </plus-intersection>
    </div>
  );
};
export default IntersectionDefault;
