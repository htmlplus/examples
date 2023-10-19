import { Faker, Sticky } from '@htmlplus/react';

function App() {
  return (
    <div className="container">
      <Faker api="lorem.paragraphs"></Faker>
      <Sticky watcher>
        <Faker></Faker>
      </Sticky>
      <Faker api="lorem.paragraphs" arguments={[20, '\n\n']}></Faker>
    </div>
  );
}
export default App;
