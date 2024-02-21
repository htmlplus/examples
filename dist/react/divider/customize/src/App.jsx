import '@htmlplus/core/divider.js';
import '@htmlplus/core/faker.js';

function App() {
  return (
    <>
      <plus-divider>
        <span>
          <plus-icon name="tag"></plus-icon>
          &nbsp; Description
        </span>
      </plus-divider>
      <plus-faker></plus-faker>
    </>
  );
}
export default App;
