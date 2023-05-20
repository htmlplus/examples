import { Faker, ScrollDetector } from '@htmlplus/react';
const ScrollDetectorDefault = () => {
  const onChange = (event) => {
    console.log(event.detail);
  };
  return (
    <div className="container">
      <div className="scrollable" id="reference1">
        <Faker api="lorem.paragraphs" arguments='[20, "\n\n"]'></Faker>
      </div>
      <ScrollDetector
        reference="#reference1"
        vertical
        onChange={(event) => onChange(event)}
      ></ScrollDetector>
    </div>
  );
};
export default ScrollDetectorDefault;
