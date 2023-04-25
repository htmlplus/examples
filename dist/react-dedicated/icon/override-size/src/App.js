import { Icon, Stack } from '@htmlplus/react';
const IconOverrideSize = () => {
  return (
    <Stack gap="2rem">
      <Icon name="home" size="xs"></Icon>
      <Icon name="home" size="sm"></Icon>
      <Icon name="home" size="md"></Icon>
      <Icon name="home" size="lg"></Icon>
      <Icon name="home" size="xl"></Icon>
    </Stack>
  );
};
export default IconOverrideSize;
