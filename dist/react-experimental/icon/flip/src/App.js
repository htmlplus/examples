import '@htmlplus/core/center.js';
import '@htmlplus/core/icon.js';
const IconFlip = () => {
  return (
    <plus-center>
      <plus-icon name="home"></plus-icon>
      <plus-icon name="home" flip="horizontal"></plus-icon>
      <plus-icon name="home" flip="vertical"></plus-icon>
      <plus-icon name="home" flip="both"></plus-icon>
    </plus-center>
  );
};
export default IconFlip;
