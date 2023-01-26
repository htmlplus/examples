import '@htmlplus/core/faker.js';
import '@htmlplus/core/sticky.js';
const StickyDefault = () => {
  return (
    <div className="container">
      <plus-faker api="lorem.paragraphs"></plus-faker>
      <plus-sticky>
        <plus-faker></plus-faker>
      </plus-sticky>
      <plus-faker api="lorem.paragraphs" arguments='[20, "\n\n"]'></plus-faker>
    </div>
  );
};
export default StickyDefault;
