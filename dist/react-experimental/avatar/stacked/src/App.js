import '@htmlplus/core/avatar.js';
import '@htmlplus/core/avatar-group.js';
const AvatarStacked = () => {
  return (
    <div className="center">
      <plus-avatar-group stacked>
        <plus-avatar shape="circle">
          <img src="http://placeimg.com/94/94/people" />
        </plus-avatar>
        <plus-avatar shape="circle">
          <img src="http://placeimg.com/95/95/people" />
        </plus-avatar>
        <plus-avatar shape="circle">
          <img src="http://placeimg.com/96/96/people" />
        </plus-avatar>
      </plus-avatar-group>
    </div>
  );
};
export default AvatarStacked;