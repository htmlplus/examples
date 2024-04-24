import '@htmlplus/ui/avatar.js';
import '@htmlplus/ui/center.js';

function App() {
  return (
    <plus-center>
      <plus-avatar shape="circle">
        <img src="https://picsum.photos/id/65/90/90" />
        <plus-avatar shape="circle" size="xs" slot="end-bottom">
          <img src="https://picsum.photos/id/65/90/90" />
        </plus-avatar>
      </plus-avatar>
    </plus-center>
  );
}
export default App;
