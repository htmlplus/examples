import { Faker, Sticky } from '@htmlplus/react';
const StickyDefault = () => {
  return (
    <div className="container">
      <Faker type="lorem.paragraphs"></Faker>
      <Sticky>
        <Faker></Faker>
      </Sticky>
      <Faker type="lorem.paragraphs" arguments='[20, "\n\n"]'></Faker>
    </div>
  );
};
export default StickyDefault;
