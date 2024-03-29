import '@htmlplus/ui/grid-item.js';
import '@htmlplus/ui/grid.js';

function App() {
  return (
    <plus-grid>
      <plus-grid-item order-xs="3" xs="grow">
        <div>order=3</div>
      </plus-grid-item>
      <plus-grid-item order-xs="2" xs="grow">
        <div>order=2</div>
      </plus-grid-item>
      <plus-grid-item order-xs="1" xs="grow">
        <div>order=1</div>
      </plus-grid-item>
    </plus-grid>
  );
}
export default App;
