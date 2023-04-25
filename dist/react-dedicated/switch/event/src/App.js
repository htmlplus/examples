import { Center, Switch } from '@htmlplus/react';
const SwitchEvent = () => {
  const onChange = (event) => {
    window.alert(`Will be changed to ${event.target.checked ? 'On' : 'Off'}`);
  };
  return (
    <Center>
      <Switch onChange={(event) => onChange(event)}></Switch>
    </Center>
  );
};
export default SwitchEvent;
