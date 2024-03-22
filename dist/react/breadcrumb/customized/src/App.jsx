import '@htmlplus/ui/breadcrumb.js';
import '@htmlplus/ui/icon.js';

function App() {
  return (
    <plus-breadcrumb max={2}>
      <plus-icon slot="separator" name="arrow-right-short"></plus-icon>
      <a href="#">HTMLPLUS</a>
      <a href="#">UI</a>
      <a href="#">Elements</a>
      <a href="#">Breadcrumb</a>
    </plus-breadcrumb>
  );
}
export default App;
