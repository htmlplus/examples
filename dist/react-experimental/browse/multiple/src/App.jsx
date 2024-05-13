import '@htmlplus/ui/browse.js';
import '@htmlplus/ui/center.js';

function App() {
  function onPlusChange(event) {
    alert(`${event.detail.files.length} file(s) are selected.`);
  }
  return (
    <plus-center>
      <plus-browse multiple onPlusChange={onPlusChange}>
        Click Here
      </plus-browse>
    </plus-center>
  );
}
export default App;
