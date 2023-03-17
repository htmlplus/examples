import '@htmlplus/core/avatar.js';
import '@htmlplus/core/avatar-group.js';
import '@htmlplus/core/center.js';
const AvatarGroupStacked = () => {
  return (
    <plus-center>
      <plus-avatar-group stacked>
        <plus-avatar shape="circle">
          <img src="https://picsum.photos/id/331/90/90" />
        </plus-avatar>
        <plus-avatar shape="circle">
          <img src="https://picsum.photos/id/334/90/90" />
        </plus-avatar>
        <plus-avatar shape="circle">
          <img src="https://picsum.photos/id/338/90/90" />
        </plus-avatar>
      </plus-avatar-group>
    </plus-center>
  );
};
export default AvatarGroupStacked;
