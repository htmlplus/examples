import '@htmlplus/core/icon.js';
import '@htmlplus/core/stack.js';
const IconFlip = () => {
  return (
    <plus-stack gap="2rem">
      <plus-icon name="home"></plus-icon>
      <plus-icon name="home" flip="horizontal"></plus-icon>
      <plus-icon name="home" flip="vertical"></plus-icon>
      <plus-icon name="home" flip="both"></plus-icon>
    </plus-stack>
  );
};
export default IconFlip;
