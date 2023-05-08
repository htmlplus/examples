import '@htmlplus/core/icon.js';
import '@htmlplus/core/stack.js';
const IconCustomSize = () => {
  return (
    <plus-stack gap="2rem">
      <plus-icon name="house" size="16"></plus-icon>
      <plus-icon name="house" size="32px"></plus-icon>
      <plus-icon name="house" size="3rem"></plus-icon>
    </plus-stack>
  );
};
export default IconCustomSize;