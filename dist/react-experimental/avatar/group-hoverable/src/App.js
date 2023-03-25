import '@htmlplus/core/avatar.js';
import '@htmlplus/core/avatar-group.js';
import '@htmlplus/core/center.js';
const AvatarGroupHoverable = () => {
  return (
    <plus-center>
      <plus-avatar-group stacked hoverable>
        <plus-avatar></plus-avatar>
        <plus-avatar></plus-avatar>
        <plus-avatar></plus-avatar>
        <plus-avatar></plus-avatar>
        <plus-avatar></plus-avatar>
      </plus-avatar-group>
    </plus-center>
  );
};
export default AvatarGroupHoverable;
