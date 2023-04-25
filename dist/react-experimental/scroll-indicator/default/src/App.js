import '@htmlplus/core/faker.js';
import '@htmlplus/core/scroll-indicator.js';
const ScrollIndicatorDefault = () => {
  return (
    <div className="container">
      <plus-scroll-indicator source=".scrollable"></plus-scroll-indicator>
      <div className="scrollable">
        <plus-faker
          api="lorem.paragraphs"
          arguments='[15, "\n\n"]'
        ></plus-faker>
      </div>
    </div>
  );
};
export default ScrollIndicatorDefault;
