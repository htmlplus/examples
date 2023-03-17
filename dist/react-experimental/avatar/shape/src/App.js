import '@htmlplus/core/avatar.js';
import '@htmlplus/core/avatar-group.js';
import '@htmlplus/core/center.js';
const AvatarShape = () => {
  return (
    <plus-center>
      <plus-avatar-group>
        <plus-avatar shape="circle">C</plus-avatar>
        <plus-avatar shape="round">R</plus-avatar>
        <plus-avatar shape="tile">T</plus-avatar>
      </plus-avatar-group>
    </plus-center>
  );
};
export default AvatarShape;
