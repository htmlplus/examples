import '@htmlplus/ui/faker.js';
import '@htmlplus/ui/scroll-detector.js';

function App() {
  function onPlusChange(event) {
    console.log(event.detail);
  }
  return (
    <div className="container">
      <div className="scrollable reference1">
        <plus-faker api="lorem.paragraphs" arguments={[20, '\n\n']}></plus-faker>
      </div>
      <plus-scroll-detector
        reference=".reference1"
        vertical
        onPlusChange={onPlusChange}
      ></plus-scroll-detector>
    </div>
  );
}
export default App;
