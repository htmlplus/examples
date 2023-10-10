import '@htmlplus/core/animation.js';
import '@htmlplus/core/animation/names/fading-exits/fade-out-down.js';
import '@htmlplus/core/grid-item.js';
import '@htmlplus/core/grid.js';

function App() {
  return (
    <>
      <plus-grid justify-content="evenly" gutter="md">
        <plus-grid-item xs="12" sm="auto">
          <plus-animation
            easing="linear"
            iterations={Infinity}
            name="fade-out-down"
            run
          ></plus-animation>
        </plus-grid-item>
        <plus-grid-item xs="12" sm="auto">
          <plus-animation
            easing="ease-in"
            iterations={Infinity}
            name="fade-out-down"
            run
          ></plus-animation>
        </plus-grid-item>
        <plus-grid-item xs="12" sm="auto">
          <plus-animation
            easing="cubic-bezier(0.25, 0.50, 0.25, 0.50)"
            iterations={Infinity}
            name="fade-out-down"
            run
          ></plus-animation>
        </plus-grid-item>
      </plus-grid>
      <br />
      <br />
      <br />
    </>
  );
}
export default App;
