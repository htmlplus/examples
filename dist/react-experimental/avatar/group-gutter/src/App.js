import '@htmlplus/core/avatar.js';
import '@htmlplus/core/avatar-group.js';
import '@htmlplus/core/center.js';
const AvatarGroupGutter = () => {
  return (
    <>
      <plus-center>
        <plus-avatar-group>
          <plus-avatar>1</plus-avatar>
          <plus-avatar>2</plus-avatar>
          <plus-avatar>3</plus-avatar>
        </plus-avatar-group>
      </plus-center>
      <br />
      <plus-center>
        <plus-avatar-group stacked>
          <plus-avatar>1</plus-avatar>
          <plus-avatar>2</plus-avatar>
          <plus-avatar>3</plus-avatar>
        </plus-avatar-group>
      </plus-center>
    </>
  );
};
export default AvatarGroupGutter;
