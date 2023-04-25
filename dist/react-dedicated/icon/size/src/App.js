import { Icon, Stack } from '@htmlplus/react';
const IconSize = () => {
  return (
    <>
      <Stack gap="2rem">
        <Icon name="home" size="xs"></Icon>
        <Icon name="home" size="sm"></Icon>
        <Icon name="home" size="md"></Icon>
        <Icon name="home" size="lg"></Icon>
        <Icon name="home" size="xl"></Icon>
      </Stack>
      <Stack gap="2rem">
        <Icon name="home" size="1x"></Icon>
        <Icon name="home" size="2x"></Icon>
        <Icon name="home" size="3x"></Icon>
        <Icon name="home" size="4x"></Icon>
        <Icon name="home" size="5x"></Icon>
        <Icon name="home" size="6x"></Icon>
        <Icon name="home" size="7x"></Icon>
        <Icon name="home" size="8x"></Icon>
        <Icon name="home" size="9x"></Icon>
      </Stack>
    </>
  );
};
export default IconSize;
