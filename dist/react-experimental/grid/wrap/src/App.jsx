import '@htmlplus/ui/grid-item.js';
import '@htmlplus/ui/grid.js';

function App() {
  return (
    <plus-grid wrap="off">
      <plus-grid-item xs="6">
        <div>xs=6</div>
      </plus-grid-item>
      <plus-grid-item xs="2">
        <div>xs=2</div>
      </plus-grid-item>
      <plus-grid-item xs="6">
        <div>xs=6</div>
      </plus-grid-item>
      <plus-grid-item xs="2">
        <div>xs=2</div>
      </plus-grid-item>
    </plus-grid>
  );
}
export default App;
