import { Faker, Floating, Icon } from '@htmlplus/react';

function App() {
  return (
    <div>
      <Faker api="lorem.paragraphs"></Faker>
      <Floating offset={[20, 20]}>
        <Icon name="circle-fill"></Icon>
      </Floating>
    </div>
  );
}
export default App;
