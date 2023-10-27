import { Faker, Floating, Icon } from '@htmlplus/react';

function App() {
  return (
    <div
      style={{
        position: 'relative'
      }}
    >
      <Faker api="lorem.paragraphs"></Faker>
      <Floating>
        <Icon name="circle-fill"></Icon>
      </Floating>
    </div>
  );
}
export default App;
