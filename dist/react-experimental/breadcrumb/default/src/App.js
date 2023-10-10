import '@htmlplus/core/breadcrumb.js';
import '@htmlplus/core/center.js';

function App() {
  return (
    <plus-center>
      <plus-breadcrumb separator="/">
        <a href="#">HTMLPLUS</a>
        <a href="#">Core</a>
        <a href="#">UI Components</a>
        <span>Breadcrumb</span>
      </plus-breadcrumb>
    </plus-center>
  );
}
export default App;
