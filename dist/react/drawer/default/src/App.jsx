import '@htmlplus/ui/card.js';
import '@htmlplus/ui/drawer-toggler.js';
import '@htmlplus/ui/drawer.js';

function App() {
  return (
    <div>
      <plus-drawer animation size="200px" connector="drawer-default">
        <plus-card>Drawer Content</plus-card>
      </plus-drawer>
      <plus-card>
        <plus-drawer-toggler connector="drawer-default">Toggle</plus-drawer-toggler>
      </plus-card>
    </div>
  );
}
export default App;
