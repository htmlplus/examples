import { useState } from 'react';
import { ClickOutside } from '@htmlplus/react';
const ClickOutsideDefault = () => {
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen(!open);
  };
  const onClickOutside = () => {
    setOpen(false);
  };
  return (
    <ClickOutside onClickOutside={() => onClickOutside()}>
      <button onClick={() => onClick()}>Open Menu Dropdown</button>
      {open && (
        <div>Click me, I will stay visible until you click outside.</div>
      )}
    </ClickOutside>
  );
};
export default ClickOutsideDefault;
