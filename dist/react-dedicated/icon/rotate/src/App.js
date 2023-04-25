import { Icon, Stack } from '@htmlplus/react';
const IconRotate = () => {
  return (
    <Stack gap="2rem">
      <Icon name="home" rotate="0"></Icon>
      <Icon name="home" rotate="90"></Icon>
      <Icon name="home" rotate="180"></Icon>
      <Icon name="home" rotate="270"></Icon>
    </Stack>
  );
};
export default IconRotate;
