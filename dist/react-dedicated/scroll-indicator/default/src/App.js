import { Faker, ScrollIndicator } from '@htmlplus/react';
const ScrollIndicatorDefault = () => {
  return (
    <div className="container">
      <ScrollIndicator source=".scrollable"></ScrollIndicator>
      <div className="scrollable">
        <Faker api="lorem.paragraphs" arguments='[15, "\n\n"]'></Faker>
      </div>
    </div>
  );
};
export default ScrollIndicatorDefault;
