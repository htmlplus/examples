import { Icon, Stack } from '@htmlplus/react';
const IconCustomSize = () => {
  return (
    <Stack gap="2rem">
      <Icon name="house" size="16"></Icon>
      <Icon name="house" size="32px"></Icon>
      <Icon name="house" size="3rem"></Icon>
    </Stack>
  );
};
export default IconCustomSize;
