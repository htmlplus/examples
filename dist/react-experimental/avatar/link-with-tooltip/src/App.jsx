import '@htmlplus/ui/avatar.js';
import '@htmlplus/ui/center.js';
import '@htmlplus/ui/tooltip.js';

function App() {
  return (
    <plus-center>
      <plus-avatar>
        <img src="https://picsum.photos/id/177/90/90" />
        <a href="https://picsum.photos/id/177/90/90" target="_blank"></a>
      </plus-avatar>
      <plus-tooltip>Tooltip</plus-tooltip>
    </plus-center>
  );
}
export default App;
