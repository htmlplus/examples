import { useState } from 'react';
import '@htmlplus/core/faker.js';
import '@htmlplus/core/progress-bar.js';
import '@htmlplus/core/scroll-detector.js';
const ScrollDetectorScrollIndicator = () => {
  const [value, setValue] = useState(0);
  const onChange = (event) => {
    setValue(event.detail.progress);
  };
  return (
    <div className="container">
      <plus-progress-bar value={value}></plus-progress-bar>
      <div className="scrollable" id="reference2">
        <plus-faker
          api="lorem.paragraphs"
          arguments='[20, "\n\n"]'
          seed={0}
        ></plus-faker>
      </div>
      <plus-scroll-detector
        reference="#reference2"
        vertical
        onplus-change={(event) => onChange(event)}
      ></plus-scroll-detector>
    </div>
  );
};
export default ScrollDetectorScrollIndicator;
