import '@htmlplus/core/icon.js';
import '@htmlplus/core/stack.js';
const IconSize = () => {
  return (
    <>
      <plus-stack gap="2rem">
        <plus-icon name="home" size="xs"></plus-icon>
        <plus-icon name="home" size="sm"></plus-icon>
        <plus-icon name="home" size="md"></plus-icon>
        <plus-icon name="home" size="lg"></plus-icon>
        <plus-icon name="home" size="xl"></plus-icon>
      </plus-stack>
      <plus-stack gap="2rem">
        <plus-icon name="home" size="1x"></plus-icon>
        <plus-icon name="home" size="2x"></plus-icon>
        <plus-icon name="home" size="3x"></plus-icon>
        <plus-icon name="home" size="4x"></plus-icon>
        <plus-icon name="home" size="5x"></plus-icon>
        <plus-icon name="home" size="6x"></plus-icon>
        <plus-icon name="home" size="7x"></plus-icon>
        <plus-icon name="home" size="8x"></plus-icon>
        <plus-icon name="home" size="9x"></plus-icon>
      </plus-stack>
    </>
  );
};
export default IconSize;
