import '@htmlplus/core/breadcrumb.js';
import '@htmlplus/core/center.js';
import '@htmlplus/core/icon.js';

function App() {
  return (
    <plus-center>
      <plus-breadcrumb separator="-" max={2} expander-text="Show more">
        <plus-icon slot="expander" name="chevron-compact-right"></plus-icon>
        <a href="#">HTMLPLUS</a>
        <a href="#">Core</a>
        <a href="#">UI Elements</a>
        <a href="#">Breadcrumb</a>
      </plus-breadcrumb>
    </plus-center>
  );
}
export default App;