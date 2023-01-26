import '@htmlplus/core/faker.js';
import '@htmlplus/core/sticky.js';
const StickyDefault = () => {
  return (
    <div className="container">
      <plus-faker type="lorem.paragraphs"></plus-faker>
      <plus-sticky>
        <plus-faker></plus-faker>
      </plus-sticky>
      <plus-faker type="lorem.paragraphs" arguments='[20, "\n\n"]'></plus-faker>
    </div>
  );
};
export default StickyDefault;
