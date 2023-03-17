import { Avatar, Center } from '@htmlplus/react';
const AvatarGroup = () => {
  return (
    <Center>
      <Avatar.Group>
        <Avatar>
          <img src="https://picsum.photos/id/331/90/90" />
        </Avatar>
        <Avatar>
          <img src="https://picsum.photos/id/334/90/90" />
        </Avatar>
        <Avatar>
          <img src="https://picsum.photos/id/338/90/90" />
        </Avatar>
      </Avatar.Group>
    </Center>
  );
};
export default AvatarGroup;
