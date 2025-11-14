import '@htmlplus/ui/divider.js';
import '@htmlplus/ui/faker.js';
import '@htmlplus/ui/icon.js';

function App() {
  return (
    <>
      <plus-divider color="rgb(238, 110, 115)">
        <span>
          <plus-icon name="tag"></plus-icon>
          &nbsp; Description
        </span>
      </plus-divider>
      <br />
      <plus-faker></plus-faker>
    </>
  );
}
export default App;
