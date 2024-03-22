import '@htmlplus/ui/avatar-group.js';
import '@htmlplus/ui/avatar.js';
import '@htmlplus/ui/center.js';

function App() {
  return (
    <plus-center>
      <plus-avatar-group>
        <plus-avatar shape="circle">C</plus-avatar>
        <plus-avatar shape="round">R</plus-avatar>
        <plus-avatar shape="tile">T</plus-avatar>
      </plus-avatar-group>
    </plus-center>
  );
}
export default App;
