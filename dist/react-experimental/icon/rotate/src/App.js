import '@htmlplus/core/icon.js';
import '@htmlplus/core/stack.js';
const IconRotate = () => {
  return (
    <plus-stack gap="2rem">
      <plus-icon name="home" rotate="0"></plus-icon>
      <plus-icon name="home" rotate="90"></plus-icon>
      <plus-icon name="home" rotate="180"></plus-icon>
      <plus-icon name="home" rotate="270"></plus-icon>
    </plus-stack>
  );
};
export default IconRotate;
