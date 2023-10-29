import { Avatar, Center, Tooltip } from '@htmlplus/react';

function App() {
  return (
    <Center>
      <Avatar>
        <img src="https://picsum.photos/id/177/90/90" />
        <a href="https://picsum.photos/id/177/90/90" target="_blank"></a>
      </Avatar>
      <Tooltip>Tooltip</Tooltip>
    </Center>
  );
}
export default App;
