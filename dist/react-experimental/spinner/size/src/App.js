import '@htmlplus/core/spinner.js';
import '@htmlplus/core/stack.js';
const SpinnerSize = () => {
  return (
    <plus-stack gap="2rem">
      <plus-spinner size="sm"></plus-spinner>
      <plus-spinner size="md"></plus-spinner>
      <plus-spinner size="lg"></plus-spinner>
    </plus-stack>
  );
};
export default SpinnerSize;
