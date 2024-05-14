import '@htmlplus/ui/browse.js';
import '@htmlplus/ui/center.js';

function App() {
  function onPlusChange(event) {
    if (event.detail.error) {
      alert(event.detail.error.message);
    }
  }
  return (
    <plus-center>
      <plus-browse min={3} max={5} multiple onPlusChange={onPlusChange}>
        {' '}
        Click Here{' '}
      </plus-browse>
    </plus-center>
  );
}
export default App;
