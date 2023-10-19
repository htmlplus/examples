import { Accordion, Faker, Icon } from '@htmlplus/react';

function App() {
  return (
    <Accordion summary="First">
      <Icon slot="icon-expand" name="plus"></Icon>
      <Icon slot="icon-collapse" name="dash"></Icon>
      <Faker></Faker>
    </Accordion>
  );
}
export default App;
