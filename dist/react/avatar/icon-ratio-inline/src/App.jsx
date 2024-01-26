import '@htmlplus/core/avatar-group.js';
import '@htmlplus/core/avatar.js';
import '@htmlplus/core/center.js';
import '@htmlplus/core/icon.js';

function App() {
  return (
    <plus-center>
      <plus-avatar-group>
        <plus-avatar>
          <plus-icon name="person" size="1.0em"></plus-icon>
        </plus-avatar>
        <plus-avatar>
          <plus-icon name="person" size="1.5em"></plus-icon>
        </plus-avatar>
        <plus-avatar>
          <plus-icon name="person" size="2.0em"></plus-icon>
        </plus-avatar>
      </plus-avatar-group>
    </plus-center>
  );
}
export default App;
