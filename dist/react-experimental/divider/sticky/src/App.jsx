import '@htmlplus/ui/divider.js';
import '@htmlplus/ui/sticky.js';

function App() {
  return (
    <div className="container">
      <plus-sticky>
        <plus-divider>
          <span>Today</span>
        </plus-divider>
      </plus-sticky>
      <plus-sticky>
        <plus-divider>
          <span>Yesterday</span>
        </plus-divider>
      </plus-sticky>
      <plus-sticky>
        <plus-divider>
          <span>5 Days Ago</span>
        </plus-divider>
      </plus-sticky>
      <plus-sticky>
        <plus-divider>
          <span>2 Weeks Ago</span>
        </plus-divider>
      </plus-sticky>
      <plus-sticky>
        <plus-divider>
          <span>1 Month Ago</span>
        </plus-divider>
      </plus-sticky>
    </div>
  );
}
export default App;
