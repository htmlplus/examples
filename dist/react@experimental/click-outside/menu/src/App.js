import { useState } from 'react';
import '@htmlplus/core/card.js';
import '@htmlplus/core/card-body.js';
import '@htmlplus/core/center.js';
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
    <plus-center>
      <plus-click-outside onplus-click-outside={() => onClickOutside()}>
        <button onClick={() => onClick()}>Open Menu Dropdown</button>
        {open && (
          <plus-card elevation="10" id="menu" outlined>
            <plus-card-body>
              It will stay visible until you click outside.
            </plus-card-body>
          </plus-card>
        )}
      </plus-click-outside>
    </plus-center>
  );
};
export default ClickOutsideDefault;
