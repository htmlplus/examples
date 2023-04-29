import '@htmlplus/core/icon.js';
import '@htmlplus/core/stack.js';
const IconOverrideSize = () => {
  return (
    <plus-stack gap="2rem">
      <plus-icon name="house" size="xs"></plus-icon>
      <plus-icon name="house" size="sm"></plus-icon>
      <plus-icon name="house" size="md"></plus-icon>
      <plus-icon name="house" size="lg"></plus-icon>
      <plus-icon name="house" size="xl"></plus-icon>
    </plus-stack>
  );
};
export default IconOverrideSize;
