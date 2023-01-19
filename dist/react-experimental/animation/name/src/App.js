import '@htmlplus/core/animation.js';
import '@htmlplus/core/grid.js';
import '@htmlplus/core/grid-item.js';
import '@htmlplus/core/animation/names/flippers/flip-in-x.js';
import '@htmlplus/core/animation/names/flippers/flip-in-y.js';
const AnimationName = () => {
  return (
    <plus-grid justify-content="evenly" gutter="md">
      <plus-grid-item xs="12" sm="auto">
        <plus-animation
          iterations="Infinity"
          name="flip-in-x"
          run
        ></plus-animation>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="auto">
        <plus-animation
          iterations="Infinity"
          name="flip-in-y"
          run
        ></plus-animation>
      </plus-grid-item>
    </plus-grid>
  );
};
export default AnimationName;
