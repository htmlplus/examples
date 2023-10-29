import '@htmlplus/core/avatar-group.js';
import '@htmlplus/core/avatar.js';
import '@htmlplus/core/center.js';
import '@htmlplus/core/icon.js';

function App() {
  return (
    <plus-center>
      <plus-avatar-group>
        <plus-avatar>
          <plus-icon name="person" className="icon-1"></plus-icon>
        </plus-avatar>
        <plus-avatar>
          <plus-icon name="person" className="icon-2"></plus-icon>
        </plus-avatar>
        <plus-avatar>
          <plus-icon name="person" className="icon-3"></plus-icon>
        </plus-avatar>
      </plus-avatar-group>
    </plus-center>
  );
}
export default App;
