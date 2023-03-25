import { Avatar, Center, Tooltip } from '@htmlplus/react';
const AvatarGroupTooltip = () => {
  return (
    <Center>
      <Avatar.Group stacked>
        <Avatar></Avatar>
        <Tooltip>Tooltip</Tooltip>
        <Avatar></Avatar>
        <Tooltip>Tooltip</Tooltip>
        <Avatar></Avatar>
        <Tooltip>Tooltip</Tooltip>
      </Avatar.Group>
    </Center>
  );
};
export default AvatarGroupTooltip;
