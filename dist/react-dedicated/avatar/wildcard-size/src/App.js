import { Avatar, Center } from '@htmlplus/react';
const AvatarWildcardSize = () => {
  return (
    <Center>
      <Avatar.Group>
        <Avatar size="48">48px</Avatar>
        <Avatar size="64px">64px</Avatar>
        <Avatar size="5rem">5rem</Avatar>
      </Avatar.Group>
    </Center>
  );
};
export default AvatarWildcardSize;
