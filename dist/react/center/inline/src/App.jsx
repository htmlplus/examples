import '@htmlplus/ui/center.js';
import '@htmlplus/ui/icon.js';

function App() {
  return (
    <plus-center>
      <button>
        <plus-center inline>
          <plus-icon name="list" size="2x"></plus-icon>
          &nbsp; Menu
        </plus-center>
      </button>
    </plus-center>
  );
}
export default App;
