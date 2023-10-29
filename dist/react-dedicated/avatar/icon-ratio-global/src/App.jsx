import { Avatar, Center, Icon } from '@htmlplus/react';

function App() {
  return (
    <Center>
      <Avatar.Group>
        <Avatar>
          <Icon name="person" className="icon-1"></Icon>
        </Avatar>
        <Avatar>
          <Icon name="person" className="icon-2"></Icon>
        </Avatar>
        <Avatar>
          <Icon name="person" className="icon-3"></Icon>
        </Avatar>
      </Avatar.Group>
    </Center>
  );
}
export default App;
