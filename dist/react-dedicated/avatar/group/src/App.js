import { Avatar } from '@htmlplus/react';
const AvatarGroup = () => {
  return (
    <div className="center">
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
    </div>
  );
};
export default AvatarGroup;
