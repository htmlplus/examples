import { Avatar, Center } from '@htmlplus/react';
const AvatarGroupGutter = () => {
  return (
    <>
      <Center>
        <Avatar.Group>
          <Avatar></Avatar>
          <Avatar></Avatar>
          <Avatar></Avatar>
        </Avatar.Group>
      </Center>
      <br />
      <Center>
        <Avatar.Group stacked>
          <Avatar></Avatar>
          <Avatar></Avatar>
          <Avatar></Avatar>
        </Avatar.Group>
      </Center>
    </>
  );
};
export default AvatarGroupGutter;
