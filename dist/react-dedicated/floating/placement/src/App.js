import { Faker, Floating, Icon } from '@htmlplus/react';

function App() {
  return (
    <div>
      <Faker api="lorem.paragraphs"></Faker>
      <br />
      <br />
      <br />
      <Floating placement="bottom">
        <Icon name="circle-fill"></Icon>
      </Floating>
    </div>
  );
}
export default App;
