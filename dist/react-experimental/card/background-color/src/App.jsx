import '@htmlplus/ui/card.js';
import '@htmlplus/ui/grid-item.js';
import '@htmlplus/ui/grid.js';

function App() {
  return (
    <plus-grid justify-content="evenly" gutter="md">
      <plus-grid-item xs="12" sm="auto">
        <plus-card className="pink"></plus-card>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="auto">
        <plus-card className="yellow"></plus-card>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="auto">
        <plus-card className="blue"></plus-card>
      </plus-grid-item>
    </plus-grid>
  );
}
export default App;
