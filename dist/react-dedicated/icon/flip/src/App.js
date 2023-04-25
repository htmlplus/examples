import { Icon, Stack } from '@htmlplus/react';
const IconFlip = () => {
  return (
    <Stack gap="2rem">
      <Icon name="home"></Icon>
      <Icon name="home" flip="horizontal"></Icon>
      <Icon name="home" flip="vertical"></Icon>
      <Icon name="home" flip="both"></Icon>
    </Stack>
  );
};
export default IconFlip;
