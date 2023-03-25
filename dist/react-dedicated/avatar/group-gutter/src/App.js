import { Avatar, Center } from '@htmlplus/react';
const AvatarGroupGutter = () => {
  return (
    <>
      <Center>
        <Avatar.Group>
          <Avatar>1</Avatar>
          <Avatar>2</Avatar>
          <Avatar>3</Avatar>
        </Avatar.Group>
      </Center>
      <br />
      <Center>
        <Avatar.Group stacked>
          <Avatar>1</Avatar>
          <Avatar>2</Avatar>
          <Avatar>3</Avatar>
        </Avatar.Group>
      </Center>
    </>
  );
};
export default AvatarGroupGutter;
