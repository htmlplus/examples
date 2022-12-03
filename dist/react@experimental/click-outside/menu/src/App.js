import { useState } from 'react';
import '@htmlplus/core/click-outside.js';
const ClickOutsideDefault = () => {
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen(!open);
  };
  const onClickOutside = () => {
    setOpen(false);
  };
  return (
    <plus-click-outside onplus-click-outside={() => onClickOutside()}>
      <button onClick={() => onClick()}>Open Menu Dropdown</button>
      {open && (
        <div>Click me, I will stay visible until you click outside.</div>
      )}
    </plus-click-outside>
  );
};
export default ClickOutsideDefault;
