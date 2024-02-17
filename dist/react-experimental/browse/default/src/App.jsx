import '@htmlplus/core/browse.js';
import '@htmlplus/core/center.js';

function App() {
  function onPlusChange(event) {
    console.log(event.detail);
  }
  return (
    <plus-center>
      <plus-browse onplus-change={onPlusChange}> Click Here </plus-browse>
    </plus-center>
  );
}
export default App;
