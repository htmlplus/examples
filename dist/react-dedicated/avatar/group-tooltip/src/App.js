import { Avatar, Center, Tooltip } from '@htmlplus/react';
const AvatarGroupTooltip = () => {
  return (
    <Center>
      <Avatar.Group stacked>
        <Avatar shape="circle">A</Avatar>
        <Tooltip>Tooltip A</Tooltip>
        <Avatar shape="circle">B</Avatar>
        <Tooltip>Tooltip B</Tooltip>
        <Avatar shape="circle">C</Avatar>
        <Tooltip>Tooltip C</Tooltip>
      </Avatar.Group>
    </Center>
  );
};
export default AvatarGroupTooltip;
