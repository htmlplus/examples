import { Faker, Floating, Icon } from '@htmlplus/react';

function App() {
  return (
    <>
      <Faker api="lorem.paragraphs"></Faker>
      <br />
      <br />
      <br />
      <Floating fixed>
        <Icon name="circle-fill"></Icon>
      </Floating>
    </>
  );
}
export default App;
