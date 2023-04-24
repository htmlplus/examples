import { Center, Icon } from '@htmlplus/react';
const IconCustomSize = () => {
  return (
    <Center>
      <Icon name="home" size="16"></Icon>
      <Icon name="home" size="32px"></Icon>
      <Icon name="home" size="3rem"></Icon>
    </Center>
  );
};
export default IconCustomSize;
