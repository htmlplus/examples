import { Avatar, Center } from '@htmlplus/react';
const AvatarGroupStacked = () => {
  return (
    <Center>
      <Avatar.Group stacked>
        <Avatar shape="circle">
          <img src="https://picsum.photos/id/331/90/90" />
        </Avatar>
        <Avatar shape="circle">
          <img src="https://picsum.photos/id/334/90/90" />
        </Avatar>
        <Avatar shape="circle">
          <img src="https://picsum.photos/id/338/90/90" />
        </Avatar>
      </Avatar.Group>
    </Center>
  );
};
export default AvatarGroupStacked;
