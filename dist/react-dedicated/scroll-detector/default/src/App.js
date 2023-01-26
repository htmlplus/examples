import { Faker, ScrollDetector } from '@htmlplus/react';
const ScrollDetectorDefault = () => {
  const onChange = (event) => {
    console.log(event.detail);
  };
  return (
    <div className="container">
      <div className="scrollable">
        <Faker api="lorem.paragraphs" arguments='[20, "\n\n"]'></Faker>
      </div>
      <ScrollDetector
        source=".scrollable"
        vertical
        onChange={(event) => onChange(event)}
      ></ScrollDetector>
    </div>
  );
};
export default ScrollDetectorDefault;
