import '@htmlplus/ui/accordion.js';
import '@htmlplus/ui/faker.js';

function App() {
  function onPlusCollapse(event) {
    if (confirm('Are you sure you want to collapse it?')) return;
    event.preventDefault();
  }
  function onPlusExpand(event) {
    if (confirm('Are you sure you want to expand it?')) return;
    event.preventDefault();
  }
  return (
    <plus-accordion summary="Summary" onplus-collapse={onPlusCollapse} onplus-expand={onPlusExpand}>
      <plus-faker></plus-faker>
    </plus-accordion>
  );
}
export default App;
