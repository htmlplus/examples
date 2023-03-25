import '@htmlplus/core/avatar.js';
import '@htmlplus/core/avatar-group.js';
import '@htmlplus/core/center.js';
import '@htmlplus/core/tooltip.js';
const AvatarGroupTooltip = () => {
  return (
    <plus-center>
      <plus-avatar-group stacked>
        <plus-avatar></plus-avatar>
        <plus-tooltip>Tooltip</plus-tooltip>
        <plus-avatar></plus-avatar>
        <plus-tooltip>Tooltip</plus-tooltip>
        <plus-avatar></plus-avatar>
        <plus-tooltip>Tooltip</plus-tooltip>
      </plus-avatar-group>
    </plus-center>
  );
};
export default AvatarGroupTooltip;
