import { Faker, Sticky } from '@htmlplus/react';
const StickyTop = () => {
  return (
    <div className="container">
      <Faker type="lorem.paragraphs"></Faker>
      <Sticky top="20px">
        <Faker></Faker>
      </Sticky>
      <Faker type="lorem.paragraphs" arguments='[20, "\n\n"]'></Faker>
    </div>
  );
};
export default StickyTop;
