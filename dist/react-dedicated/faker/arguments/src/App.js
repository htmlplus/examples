import { Faker } from '@htmlplus/react';

function App() {
  return <Faker api="lorem.paragraphs" arguments={[5, '\n\n']}></Faker>;
}
export default App;
