import { Avatar, Center } from '@htmlplus/react';

function App() {
  return (
    <Center>
      <Avatar.Group>
        <Avatar>
          <img src="https://picsum.photos/id/177/90/90" />
          <a href="https://picsum.photos/id/177/90/90" target="_blank"></a>
        </Avatar>
        <Avatar>
          <img src="https://picsum.photos/id/177/90/90" />
          <a href="https://picsum.photos/id/177/90/90" target="_blank"></a>
        </Avatar>
        <Avatar>
          <img src="https://picsum.photos/id/177/90/90" />
          <a href="https://picsum.photos/id/177/90/90" target="_blank"></a>
        </Avatar>
      </Avatar.Group>
    </Center>
  );
}
export default App;
