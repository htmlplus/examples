import '@htmlplus/core/faker.js';
import '@htmlplus/core/sticky.js';
const StickySlots = () => {
  return (
    <div className="container">
      <br />
      <plus-sticky watcher>
        <header slot="normal">Normal Header</header>
        <header slot="stick">Stick Header</header>
      </plus-sticky>
      <plus-faker api="lorem.paragraphs" arguments='[20, "\n\n"]'></plus-faker>
    </div>
  );
};
export default StickySlots;
