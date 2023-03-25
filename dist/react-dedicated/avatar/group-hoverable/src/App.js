import { Avatar, Center } from '@htmlplus/react';
const AvatarGroupHoverable = () => {
  return (
    <Center>
      <Avatar.Group stacked hoverable>
        <Avatar></Avatar>
        <Avatar></Avatar>
        <Avatar></Avatar>
        <Avatar></Avatar>
        <Avatar></Avatar>
      </Avatar.Group>
    </Center>
  );
};
export default AvatarGroupHoverable;
