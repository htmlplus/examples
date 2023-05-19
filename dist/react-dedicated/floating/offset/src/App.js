import { Faker, Floating, Icon } from '@htmlplus/react';
const FloatingOffset = () => {
  return (
    <div>
      <Faker api="lorem.paragraphs"></Faker>
      <Floating offset={[20, 20]}>
        <Icon name="circle-fill"></Icon>
      </Floating>
    </div>
  );
};
export default FloatingOffset;
