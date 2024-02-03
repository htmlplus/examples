import '@htmlplus/core/grid-item.js';
import '@htmlplus/core/grid.js';

function App() {
  return (
    <plus-grid justify-content="center">
      <plus-grid-item xs="2">
        <div>Item</div>
      </plus-grid-item>
      <plus-grid-item xs="2">
        <div>Item</div>
      </plus-grid-item>
      <plus-grid-item xs="2">
        <div>Item</div>
      </plus-grid-item>
    </plus-grid>
  );
}
export default App;
