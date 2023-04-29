import { Icon, Stack } from '@htmlplus/react';
const IconFlip = () => {
  return (
    <Stack gap="2rem">
      <Icon name="house"></Icon>
      <Icon name="house" flip="horizontal"></Icon>
      <Icon name="house" flip="vertical"></Icon>
      <Icon name="house" flip="both"></Icon>
    </Stack>
  );
};
export default IconFlip;
