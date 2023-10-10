import '@htmlplus/core/grid-item.js';
import '@htmlplus/core/grid.js';

function App() {
  return (
    <plus-grid>
      <plus-grid-item xs="3">
        <div>xs=3</div>
      </plus-grid-item>
      <plus-grid-item offset-xs="3" xs="3">
        <div>offset-xs="3", xs=3</div>
      </plus-grid-item>
      <plus-grid-item xs="3">
        <div>xs=3</div>
      </plus-grid-item>
    </plus-grid>
  );
}
export default App;
