import '@htmlplus/core/faker.js';
import '@htmlplus/core/floating.js';
import '@htmlplus/core/icon.js';
const FloatingFixed = () => {
  return (
    <div>
      <plus-faker api="lorem.paragraphs"></plus-faker>
      <br />
      <br />
      <br />
      <plus-floating fixed>
        <plus-icon name="circle-fill"></plus-icon>
      </plus-floating>
    </div>
  );
};
export default FloatingFixed;
