import { Icon, Stack } from '@htmlplus/react';

function App() {
  return (
    <Stack gap="2rem">
      <Icon name="house" rotate={0}></Icon>
      <Icon name="house" rotate={90}></Icon>
      <Icon name="house" rotate={180}></Icon>
      <Icon name="house" rotate={270}></Icon>
    </Stack>
  );
}
export default App;
