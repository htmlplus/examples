import '@htmlplus/ui/breadcrumb.js';
import '@htmlplus/ui/center.js';

function App() {
  return (
    <plus-center>
      <plus-breadcrumb separator="-">
        <a href="#">First</a>
        <a href="#">Second</a>
        <a href="#">Third</a>
        <a href="#">Fourth</a>
        <a href="#">Fifth</a>
      </plus-breadcrumb>
    </plus-center>
  );
}
export default App;
