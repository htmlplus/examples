import '@htmlplus/core/animation.js';
import '@htmlplus/core/grid.js';
import '@htmlplus/core/grid-item.js';
const AnimationName = () => {
  return (
    <plus-grid justify-content="evenly" gutter="md">
      <plus-grid-item xs="12" sm="auto">
        <plus-animation
          iterations="Infinity"
          name="fade-in"
          run
        ></plus-animation>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="auto">
        <plus-animation
          iterations="Infinity"
          name="fade-out"
          run
        ></plus-animation>
      </plus-grid-item>
    </plus-grid>
  );
};
export default AnimationName;
