import { Center, Icon } from '@htmlplus/react';
const IconFlip = () => {
  return (
    <Center>
      <Icon name="home"></Icon>
      <Icon name="home" flip="horizontal"></Icon>
      <Icon name="home" flip="vertical"></Icon>
      <Icon name="home" flip="both"></Icon>
    </Center>
  );
};
export default IconFlip;
