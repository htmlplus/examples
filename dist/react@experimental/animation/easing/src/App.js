import '@htmlplus/core/animation.js';
import '@htmlplus/core/grid.js';
import '@htmlplus/core/grid-item.js';
const AnimationEasing = () => {
  return (
    <plus-grid justify-content="evenly" gutter="md">
      <plus-grid-item xs="12" sm="auto">
        <plus-animation
          easing="ease-in"
          iterations="Infinity"
          name="fade-in"
          run
        ></plus-animation>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="auto">
        <plus-animation
          easing="ease-out"
          iterations="Infinity"
          name="fade-in"
          run
        ></plus-animation>
      </plus-grid-item>
    </plus-grid>
  );
};
export default AnimationEasing;
