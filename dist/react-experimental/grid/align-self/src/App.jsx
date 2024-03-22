import '@htmlplus/ui/grid-item.js';
import '@htmlplus/ui/grid.js';

function App() {
  return (
    <plus-grid align-items="center">
      <plus-grid-item xs="grow" align-self="start">
        <div>Item</div>
      </plus-grid-item>
      <plus-grid-item xs="grow">
        <div>Item</div>
      </plus-grid-item>
      <plus-grid-item xs="grow" align-self="end">
        <div>Item</div>
      </plus-grid-item>
    </plus-grid>
  );
}
export default App;
