import '@htmlplus/core/grid.js';
import '@htmlplus/core/grid-item.js';
import '@htmlplus/core/spinner.js';
const SpinnerSize = () => {
  return (
    <plus-grid align-items="center" justify-content="evenly">
      <plus-grid-item>
        <plus-spinner size="sm"></plus-spinner>
      </plus-grid-item>
      <plus-grid-item>
        <plus-spinner size="md"></plus-spinner>
      </plus-grid-item>
      <plus-grid-item>
        <plus-spinner size="lg"></plus-spinner>
      </plus-grid-item>
    </plus-grid>
  );
};
export default SpinnerSize;