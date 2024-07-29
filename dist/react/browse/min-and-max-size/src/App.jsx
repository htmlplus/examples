import '@htmlplus/ui/browse.js';
import '@htmlplus/ui/center.js';

function App() {
  function onPlusChange(event) {
    const { errors, file } = event.detail.files[0];
    if (errors?.length) {
      alert(errors[0].message);
    } else {
      alert(`File '${file.name}' selected.`);
    }
  }
  return (
    <plus-center>
      <plus-browse min-size={1000000} max-size={5000000} onPlusChange={onPlusChange}>
        {' '}
        Click Here{' '}
      </plus-browse>
    </plus-center>
  );
}
export default App;
