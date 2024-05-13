import '@htmlplus/ui/browse.js';
import '@htmlplus/ui/center.js';

function App() {
  function onPlusChange(event) {
    console.log(event.detail);
  }
  return (
    <plus-center>
      <plus-browse onPlusChange={onPlusChange}>Click Here</plus-browse>
    </plus-center>
  );
}
export default App;
