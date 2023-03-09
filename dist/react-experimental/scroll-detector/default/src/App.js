import '@htmlplus/core/faker.js';
import '@htmlplus/core/scroll-detector.js';
const ScrollDetectorDefault = () => {
  const onChange = (event) => {
    console.log(event.detail);
  };
  return (
    <div className="container">
      <div className="scrollable">
        <plus-faker
          api="lorem.paragraphs"
          arguments='[20, "\n\n"]'
        ></plus-faker>
      </div>
      <plus-scroll-detector
        reference=".scrollable"
        vertical
        onplus-change={(event) => onChange(event)}
      ></plus-scroll-detector>
    </div>
  );
};
export default ScrollDetectorDefault;
