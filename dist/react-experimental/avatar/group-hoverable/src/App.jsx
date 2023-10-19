import '@htmlplus/core/avatar-group.js';
import '@htmlplus/core/avatar.js';
import '@htmlplus/core/center.js';

function App() {
  return (
    <plus-center>
      <plus-avatar-group stacked hoverable>
        <plus-avatar shape="circle">
          <img src="https://picsum.photos/id/548/90/90" />
        </plus-avatar>
        <plus-avatar shape="circle">
          <img src="https://picsum.photos/id/628/90/90" />
        </plus-avatar>
        <plus-avatar shape="circle">
          <img src="https://picsum.photos/id/660/90/90" />
        </plus-avatar>
        <plus-avatar shape="circle">
          <img src="https://picsum.photos/id/669/90/90" />
        </plus-avatar>
        <plus-avatar shape="circle"> +2 </plus-avatar>
      </plus-avatar-group>
    </plus-center>
  );
}
export default App;
