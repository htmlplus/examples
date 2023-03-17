import { Avatar, Center } from '@htmlplus/react';
const AvatarShape = () => {
  return (
    <Center>
      <Avatar.Group>
        <Avatar shape="circle">C</Avatar>
        <Avatar shape="round">R</Avatar>
        <Avatar shape="tile">T</Avatar>
      </Avatar.Group>
    </Center>
  );
};
export default AvatarShape;
