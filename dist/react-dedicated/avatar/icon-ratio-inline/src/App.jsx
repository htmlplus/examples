import { Avatar, Center, Icon } from '@htmlplus/react';

function App() {
  return (
    <Center>
      <Avatar.Group>
        <Avatar>
          <Icon name="person" size="1.0em"></Icon>
        </Avatar>
        <Avatar>
          <Icon name="person" size="1.5em"></Icon>
        </Avatar>
        <Avatar>
          <Icon name="person" size="2.0em"></Icon>
        </Avatar>
      </Avatar.Group>
    </Center>
  );
}
export default App;
