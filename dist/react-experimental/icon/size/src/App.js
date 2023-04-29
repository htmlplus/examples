import '@htmlplus/core/icon.js';
import '@htmlplus/core/stack.js';
const IconSize = () => {
  return (
    <>
      <plus-stack gap="2rem">
        <plus-icon name="house" size="xs"></plus-icon>
        <plus-icon name="house" size="sm"></plus-icon>
        <plus-icon name="house" size="md"></plus-icon>
        <plus-icon name="house" size="lg"></plus-icon>
        <plus-icon name="house" size="xl"></plus-icon>
      </plus-stack>
      <plus-stack gap="2rem">
        <plus-icon name="house" size="1x"></plus-icon>
        <plus-icon name="house" size="2x"></plus-icon>
        <plus-icon name="house" size="3x"></plus-icon>
        <plus-icon name="house" size="4x"></plus-icon>
        <plus-icon name="house" size="5x"></plus-icon>
        <plus-icon name="house" size="6x"></plus-icon>
        <plus-icon name="house" size="7x"></plus-icon>
        <plus-icon name="house" size="8x"></plus-icon>
        <plus-icon name="house" size="9x"></plus-icon>
      </plus-stack>
    </>
  );
};
export default IconSize;
