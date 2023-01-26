import { Faker, Sticky } from '@htmlplus/react';
const StickySlots = () => {
  return (
    <div className="container">
      <br />
      <Sticky watcher>
        <header slot="normal">Normal Header</header>
        <header slot="stick">Stick Header</header>
      </Sticky>
      <Faker type="lorem.paragraphs" arguments='[20, "\n\n"]'></Faker>
    </div>
  );
};
export default StickySlots;
