import { Avatar, Center } from '@htmlplus/react';
const AvatarCustomSize = () => {
  return (
    <Center>
      <Avatar.Group>
        <Avatar size="xxs">xxs</Avatar>
        <Avatar size="xs">xs</Avatar>
        <Avatar size="sm">sm</Avatar>
        <Avatar size="md">md</Avatar>
        <Avatar size="lg">lg</Avatar>
        <Avatar size="xl">xl</Avatar>
        <Avatar size="xxl">xxl</Avatar>
      </Avatar.Group>
    </Center>
  );
};
export default AvatarCustomSize;
