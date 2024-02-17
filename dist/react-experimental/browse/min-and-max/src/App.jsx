import '@htmlplus/core/browse.js';
import '@htmlplus/core/center.js';

function App() {
  function onPlusChange(event) {
    if (event.detail.error) {
      alert(event.detail.error.message);
    }
  }
  return (
    <plus-center>
      <plus-browse min={3} max={5} multiple onplus-change={onPlusChange}>
        {' '}
        Click Here{' '}
      </plus-browse>
    </plus-center>
  );
}
export default App;
