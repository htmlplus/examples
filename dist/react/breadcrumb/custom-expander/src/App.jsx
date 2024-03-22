import '@htmlplus/ui/breadcrumb.js';
import '@htmlplus/ui/center.js';
import '@htmlplus/ui/icon.js';

function App() {
  return (
    <plus-center>
      <plus-breadcrumb separator="-" max={2} expander-text="Show more">
        <plus-icon slot="expander" name="chevron-compact-right"></plus-icon>
        <a href="#">HTMLPLUS</a>
        <a href="#">UI</a>
        <a href="#">Elements</a>
        <a href="#">Breadcrumb</a>
      </plus-breadcrumb>
    </plus-center>
  );
}
export default App;
