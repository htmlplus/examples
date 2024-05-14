import { useState } from 'react';

import '@htmlplus/ui/faker.js';
import '@htmlplus/ui/progress-bar.js';
import '@htmlplus/ui/scroll-detector.js';

function App() {
  const [value, setValue] = useState(0);
  function onPlusChange(event) {
    setValue(event.detail.progress);
  }
  return (
    <div className="container">
      <plus-progress-bar value={value}></plus-progress-bar>
      <div className="scrollable reference2">
        <plus-faker api="lorem.paragraphs" arguments={[20, '\n\n']} seed={0}></plus-faker>
      </div>
      <plus-scroll-detector
        reference=".reference2"
        vertical
        onPlusChange={onPlusChange}
      ></plus-scroll-detector>
    </div>
  );
}
export default App;
