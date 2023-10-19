import '@htmlplus/core/faker.js';
import '@htmlplus/core/floating.js';
import '@htmlplus/core/icon.js';

function App() {
  return (
    <div>
      <plus-faker api="lorem.paragraphs"></plus-faker>
      <br />
      <br />
      <br />
      <plus-floating placement="bottom">
        <plus-icon name="circle-fill"></plus-icon>
      </plus-floating>
    </div>
  );
}
export default App;
