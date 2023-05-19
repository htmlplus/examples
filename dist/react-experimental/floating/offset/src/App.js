import '@htmlplus/core/faker.js';
import '@htmlplus/core/floating.js';
import '@htmlplus/core/icon.js';
const FloatingOffset = () => {
  return (
    <div>
      <plus-faker api="lorem.paragraphs"></plus-faker>
      <plus-floating offset={[20, 20]}>
        <plus-icon name="circle-fill"></plus-icon>
      </plus-floating>
    </div>
  );
};
export default FloatingOffset;
