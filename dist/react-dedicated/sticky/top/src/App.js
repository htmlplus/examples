import { Faker, Sticky } from '@htmlplus/react';
const StickyTop = () => {
  return (
    <div className="container">
      <Faker api="lorem.paragraphs"></Faker>
      <Sticky top="20px">
        <Faker></Faker>
      </Sticky>
      <Faker api="lorem.paragraphs" arguments='[20, "\n\n"]'></Faker>
    </div>
  );
};
export default StickyTop;
