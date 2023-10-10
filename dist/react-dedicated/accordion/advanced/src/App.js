import { Accordion, Faker, Stack } from '@htmlplus/react';

function App() {
  return (
    <Accordion>
      <Stack slot="summary" justifyContent="space-between">
        <span>Summary</span>
        <button>Action</button>
      </Stack>
      <Faker></Faker>
    </Accordion>
  );
}
export default App;
