import '@htmlplus/core/divider.js';
import '@htmlplus/core/faker.js';
import '@htmlplus/core/grid.js';
import '@htmlplus/core/grid-item.js';
const DividerVertical = () => {
  return (
    <plus-grid align-items="center" justify-content="evenly">
      <plus-grid-item xs="5">
        <plus-faker></plus-faker>
      </plus-grid-item>
      <plus-divider vertical></plus-divider>
      <plus-grid-item xs="5">
        <plus-faker></plus-faker>
      </plus-grid-item>
    </plus-grid>
  );
};
export default DividerVertical;
