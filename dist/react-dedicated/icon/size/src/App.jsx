import { Icon, Stack } from '@htmlplus/react';

function App() {
  return (
    <>
      <Stack gap="2rem">
        <Icon name="house" size="xs"></Icon>
        <Icon name="house" size="sm"></Icon>
        <Icon name="house" size="md"></Icon>
        <Icon name="house" size="lg"></Icon>
        <Icon name="house" size="xl"></Icon>
      </Stack>
      <Stack gap="2rem">
        <Icon name="house" size="1x"></Icon>
        <Icon name="house" size="2x"></Icon>
        <Icon name="house" size="3x"></Icon>
        <Icon name="house" size="4x"></Icon>
        <Icon name="house" size="5x"></Icon>
        <Icon name="house" size="6x"></Icon>
        <Icon name="house" size="7x"></Icon>
        <Icon name="house" size="8x"></Icon>
        <Icon name="house" size="9x"></Icon>
      </Stack>
    </>
  );
}
export default App;
