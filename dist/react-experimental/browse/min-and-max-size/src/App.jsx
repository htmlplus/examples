import '@htmlplus/core/browse.js';
import '@htmlplus/core/center.js';

function App() {
  function onPlusChange(event) {
    if (event.detail.files?.[0]?.errors.length) {
      alert(event.detail.files[0].errors[0].message);
    }
  }
  return (
    <plus-center>
      <plus-browse min-size={1000000} max-size={5000000} onplus-change={onPlusChange}>
        {' '}
        Click Here{' '}
      </plus-browse>
    </plus-center>
  );
}
export default App;
