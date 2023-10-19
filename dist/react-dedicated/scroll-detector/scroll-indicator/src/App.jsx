import { useState } from 'react';

import { Faker, ProgressBar, ScrollDetector } from '@htmlplus/react';

function App() {
  const [value, setValue] = useState(0);
  function onChange(event) {
    setValue(event.detail.progress);
  }
  return (
    <div className="container">
      <ProgressBar value={value}></ProgressBar>
      <div className="scrollable reference2">
        <Faker api="lorem.paragraphs" arguments={[20, '\n\n']} seed={0}></Faker>
      </div>
      <ScrollDetector reference=".reference2" vertical onChange={onChange}></ScrollDetector>
    </div>
  );
}
export default App;
