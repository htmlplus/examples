import '@htmlplus/ui/divider.js';
import '@htmlplus/ui/faker.js';

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
