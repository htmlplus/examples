import '@htmlplus/core/animation.js';
import '@htmlplus/core/grid.js';
import '@htmlplus/core/grid-item.js';
const AnimationCustomEasing = () => {
  return (
    <plus-grid justify-content="evenly" gutter="md">
      <plus-grid-item xs="12" sm="auto">
        <plus-animation
          easing="cubic-bezier(0.165, 0.84, 0.44, 0.5)"
          iterations="Infinity"
          name="fade-in"
          run
        ></plus-animation>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="auto">
        <plus-animation
          easing="cubic-bezier(0.165, 0.84, 0.44, 1)"
          iterations="Infinity"
          name="fade-in"
          run
        ></plus-animation>
      </plus-grid-item>
    </plus-grid>
  );
};
export default AnimationCustomEasing;
