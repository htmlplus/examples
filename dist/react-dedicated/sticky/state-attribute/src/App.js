import { Faker, Sticky } from '@htmlplus/react';
const StickyStateAttribute = () => {
  return (
    <div className="container">
      <Faker type="lorem.paragraphs"></Faker>
      <Sticky watcher>
        <Faker></Faker>
      </Sticky>
      <Faker type="lorem.paragraphs" arguments='[20, "\n\n"]'></Faker>
    </div>
  );
};
export default StickyStateAttribute;
