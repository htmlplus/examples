import { Faker, Floating, Icon } from '@htmlplus/react';
const FloatingFixed = () => {
  return (
    <div>
      <Faker api="lorem.paragraphs"></Faker>
      <br />
      <br />
      <br />
      <Floating fixed>
        <Icon name="circle-fill"></Icon>
      </Floating>
    </div>
  );
};
export default FloatingFixed;
