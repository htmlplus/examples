import '@htmlplus/core/icon.js';
import '@htmlplus/core/stack.js';
const IconOverrideSize = () => {
  return (
    <plus-stack gap="2rem">
      <plus-icon name="home" size="xs"></plus-icon>
      <plus-icon name="home" size="sm"></plus-icon>
      <plus-icon name="home" size="md"></plus-icon>
      <plus-icon name="home" size="lg"></plus-icon>
      <plus-icon name="home" size="xl"></plus-icon>
    </plus-stack>
  );
};
export default IconOverrideSize;
