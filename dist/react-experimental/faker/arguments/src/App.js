import '@htmlplus/core/faker.js';

function App() {
  return <plus-faker api="lorem.paragraphs" arguments={[5, '\n\n']}></plus-faker>;
}
export default App;
