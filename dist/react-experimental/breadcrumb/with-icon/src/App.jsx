import '@htmlplus/core/breadcrumb.js';
import '@htmlplus/core/center.js';
import '@htmlplus/core/icon.js';

function App() {
  return (
    <plus-center>
      <plus-breadcrumb separator="/">
        <div>
          <plus-icon name="house"></plus-icon>
          <a href="#">HTMLPLUS</a>
        </div>
        <div>
          <plus-icon name="brush"></plus-icon>
          <a href="#">UI</a>
        </div>
        <div>
          <plus-icon name="puzzle"></plus-icon>
          <a href="#">Elements</a>
        </div>
        <div>Breadcrumb</div>
      </plus-breadcrumb>
    </plus-center>
  );
}
export default App;
