import { Avatar } from '@htmlplus/react';
const AvatarLink = () => {
  return (
    <div className="center">
      <Avatar>
        <img src="https://picsum.photos/id/177/90/90" />
        <a href="https://picsum.photos/id/177/90/90" target="_blank"></a>
      </Avatar>
    </div>
  );
};
export default AvatarLink;
