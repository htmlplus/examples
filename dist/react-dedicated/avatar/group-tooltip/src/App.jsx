import { Avatar, Center, Tooltip } from '@htmlplus/react';

function App() {
  return (
    <Center>
      <Avatar.Group>
        <Avatar></Avatar>
        <Tooltip>Tooltip</Tooltip>
        <Avatar></Avatar>
        <Tooltip>Tooltip</Tooltip>
        <Avatar></Avatar>
        <Tooltip>Tooltip</Tooltip>
      </Avatar.Group>
    </Center>
  );
}
export default App;
