import { useState } from 'react';
import '@htmlplus/core/accordion.js';
import '@htmlplus/core/faker.js';
const AccordionPersistent = () => {
  const [open, setOpen] = useState(1);
  const expand = (value) => {
    setOpen(value);
  };
  return (
    <div>
      <plus-accordion
        summary="First"
        open={open == 1}
        onplus-expand={() => expand(1)}
      >
        <plus-faker></plus-faker>
      </plus-accordion>
      <plus-accordion
        summary="Second"
        open={open == 2}
        onplus-expand={() => expand(2)}
      >
        <plus-faker></plus-faker>
      </plus-accordion>
      <plus-accordion
        summary="Third"
        open={open == 3}
        onplus-expand={() => expand(3)}
      >
        <plus-faker></plus-faker>
      </plus-accordion>
    </div>
  );
};
export default AccordionPersistent;
