import '@htmlplus/core/avatar.js';
import '@htmlplus/core/avatar-group.js';
const AvatarHoverable = () => {
  return (
    <div className="center">
      <plus-avatar-group stacked hoverable>
        <plus-avatar shape="circle">
          <img src="https://picsum.photos/id/548/90/90" />
        </plus-avatar>
        <plus-avatar shape="circle">
          <img src="https://picsum.photos/id/628/90/90" />
        </plus-avatar>
        <plus-avatar shape="circle">
          <img src="https://picsum.photos/id/660/90/90" />
        </plus-avatar>
        <plus-avatar shape="circle">
          <img src="https://picsum.photos/id/669/90/90" />
        </plus-avatar>
        <plus-avatar shape="circle">+2</plus-avatar>
      </plus-avatar-group>
    </div>
  );
};
export default AvatarHoverable;
