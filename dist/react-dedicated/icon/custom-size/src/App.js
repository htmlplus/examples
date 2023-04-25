import { Icon, Stack } from '@htmlplus/react';
const IconCustomSize = () => {
  return (
    <Stack gap="2rem">
      <Icon name="home" size="16"></Icon>
      <Icon name="home" size="32px"></Icon>
      <Icon name="home" size="3rem"></Icon>
    </Stack>
  );
};
export default IconCustomSize;
