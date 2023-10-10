import { Faker, ScrollDetector } from '@htmlplus/react';

function App() {
  function onChange(event) {
    console.log(event.detail);
  }
  return (
    <div className="container">
      <div className="scrollable reference1">
        <Faker api="lorem.paragraphs" arguments={[20, '\n\n']}></Faker>
      </div>
      <ScrollDetector reference=".reference1" vertical onChange={onChange}></ScrollDetector>
    </div>
  );
}
export default App;
