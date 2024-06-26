import '@htmlplus/ui/browse.js';
import '@htmlplus/ui/center.js';

function App() {
  function onPlusChange() {
    alert('File selected.');
  }
  return (
    <plus-center>
      <plus-browse disabled onPlusChange={onPlusChange}>
        Click Here
      </plus-browse>
    </plus-center>
  );
}
export default App;
