import '@htmlplus/core/avatar-group.js';
import '@htmlplus/core/avatar.js';
import '@htmlplus/core/center.js';
import '@htmlplus/core/tooltip.js';

function App() {
  return (
    <plus-center>
      <plus-avatar-group>
        <plus-avatar>
          <img src="https://picsum.photos/id/177/90/90" />
          <a href="https://picsum.photos/id/177/90/90" target="_blank"></a>
        </plus-avatar>
        <plus-tooltip>Tooltip 1</plus-tooltip>
        <plus-avatar>
          <img src="https://picsum.photos/id/177/90/90" />
          <a href="https://picsum.photos/id/177/90/90" target="_blank"></a>
        </plus-avatar>
        <plus-tooltip>Tooltip 2</plus-tooltip>
        <plus-avatar>
          <img src="https://picsum.photos/id/177/90/90" />
          <a href="https://picsum.photos/id/177/90/90" target="_blank"></a>
        </plus-avatar>
        <plus-tooltip>Tooltip 3</plus-tooltip>
      </plus-avatar-group>
    </plus-center>
  );
}
export default App;
