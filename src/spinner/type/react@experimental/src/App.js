import '@htmlplus/core/grid.js';
import '@htmlplus/core/grid-item.js';
import '@htmlplus/core/spinner.js';

const SpinnerType = () => {
  return (
    <plus-grid justify-content="evenly">
      <plus-grid-item>
        <plus-spinner type="default"></plus-spinner>
      </plus-grid-item>
      <plus-grid-item>
        <plus-spinner type="double-bounce"></plus-spinner>
      </plus-grid-item>
      <plus-grid-item>
        <plus-spinner type="ring"></plus-spinner>
      </plus-grid-item>
      <plus-grid-item>
        <plus-spinner type="ripple"></plus-spinner>
      </plus-grid-item>
      <plus-grid-item>
        <plus-spinner type="dual-ring"></plus-spinner>
      </plus-grid-item>
      <plus-grid-item>
        <plus-spinner type="square"></plus-spinner>
      </plus-grid-item>
    </plus-grid>
  );
};

export default SpinnerType;
