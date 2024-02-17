import '@htmlplus/core/browse.js';
import '@htmlplus/core/center.js';

function App() {
  function onPlusChange(event) {
    alert(`${event.detail.files.length} file(s) are selected.`);
  }
  return (
    <plus-center>
      <plus-browse multiple onplus-change={onPlusChange}>
        Click Here
      </plus-browse>
    </plus-center>
  );
}
export default App;
