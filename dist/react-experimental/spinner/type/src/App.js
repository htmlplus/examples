import '@htmlplus/core/grid.js';
import '@htmlplus/core/grid-item.js';
import '@htmlplus/core/spinner.js';
const SpinnerType = () => {
  return (
    <plus-grid justify-content="evenly">
      <plus-grid-item>
        <plus-spinner size="md" type="default"></plus-spinner>
      </plus-grid-item>
      <plus-grid-item>
        <plus-spinner size="md" type="double-bounce"></plus-spinner>
      </plus-grid-item>
      <plus-grid-item>
        <plus-spinner size="md" type="ring"></plus-spinner>
      </plus-grid-item>
      <plus-grid-item>
        <plus-spinner size="md" type="ripple"></plus-spinner>
      </plus-grid-item>
      <plus-grid-item>
        <plus-spinner size="md" type="dual-ring"></plus-spinner>
      </plus-grid-item>
      <plus-grid-item>
        <plus-spinner size="md" type="square"></plus-spinner>
      </plus-grid-item>
    </plus-grid>
  );
};
export default SpinnerType;
