import '@htmlplus/ui/grid-item.js';
import '@htmlplus/ui/grid.js';

function App() {
  return (
    <>
      <plus-grid>
        <plus-grid-item xs="grow">
          <div>xs=grow</div>
        </plus-grid-item>
        <plus-grid-item xs="grow">
          <div>xs=grow</div>
        </plus-grid-item>
        <plus-grid-item xs="grow">
          <div>xs=grow</div>
        </plus-grid-item>
      </plus-grid>
      <plus-grid>
        <plus-grid-item xs="12" md="2">
          <div>xs=12, md=2</div>
        </plus-grid-item>
        <plus-grid-item xs="grow">
          <div>xs=grow</div>
        </plus-grid-item>
        <plus-grid-item xs="12" md="2">
          <div>xs=12, md=2</div>
        </plus-grid-item>
      </plus-grid>
    </>
  );
}
export default App;
