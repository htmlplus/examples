import { Avatar, Center } from '@htmlplus/react';
const AvatarLink = () => {
  return (
    <Center>
      <Avatar>
        <img src="https://picsum.photos/id/177/90/90" />
        <a href="https://picsum.photos/id/177/90/90" target="_blank"></a>
      </Avatar>
    </Center>
  );
};
export default AvatarLink;
