import { Faker, Floating, Icon } from '@htmlplus/react';
const FloatingDefault = () => {
  return (
    <div>
      <Faker api="lorem.paragraphs"></Faker>
      <Floating>
        <Icon name="circle-fill"></Icon>
      </Floating>
    </div>
  );
};
export default FloatingDefault;
