import '@htmlplus/core/faker.js';
import '@htmlplus/core/floating.js';
import '@htmlplus/core/icon.js';
const FloatingDefault = () => {
  return (
    <div>
      <plus-faker api="lorem.paragraphs"></plus-faker>
      <plus-floating>
        <plus-icon name="circle-fill"></plus-icon>
      </plus-floating>
    </div>
  );
};
export default FloatingDefault;
