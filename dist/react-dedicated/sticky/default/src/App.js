import { Faker, Sticky } from '@htmlplus/react';
const StickyDefault = () => {
  return (
    <div className="container">
      <Faker api="lorem.paragraphs"></Faker>
      <Sticky>
        <Faker></Faker>
      </Sticky>
      <Faker api="lorem.paragraphs" arguments='[20, "\n\n"]'></Faker>
    </div>
  );
};
export default StickyDefault;
