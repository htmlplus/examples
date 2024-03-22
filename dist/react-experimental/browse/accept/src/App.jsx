import '@htmlplus/ui/browse.js';
import '@htmlplus/ui/center.js';

function App() {
  return (
    <plus-center>
      <plus-browse accept=".jpg, .pdf, video/*">
        Click here to select a <b>jpg</b>, <b>pdf</b> or <b>video</b> file
      </plus-browse>
    </plus-center>
  );
}
export default App;
