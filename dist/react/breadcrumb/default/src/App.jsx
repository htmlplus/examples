import '@htmlplus/ui/breadcrumb.js';
import '@htmlplus/ui/center.js';

function App() {
  return (
    <plus-center>
      <plus-breadcrumb separator="/">
        <a href="#">HTMLPLUS</a>
        <a href="#">UI</a>
        <a href="#">Elements</a>
        <span>Breadcrumb</span>
      </plus-breadcrumb>
    </plus-center>
  );
}
export default App;
