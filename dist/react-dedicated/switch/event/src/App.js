import { Center, Switch } from '@htmlplus/react';

function App() {
  function onChange(event) {
    alert(`Will be changed to ${event.target.checked ? 'On' : 'Off'}`);
  }
  return (
    <Center>
      <Switch onChange={onChange}></Switch>
    </Center>
  );
}
export default App;
