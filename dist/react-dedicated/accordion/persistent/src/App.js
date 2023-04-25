import { useState } from 'react';
import { Accordion, Faker } from '@htmlplus/react';
const AccordionPersistent = () => {
  const [open, setOpen] = useState(1);
  const expand = (value) => {
    setOpen(value);
  };
  return (
    <div>
      <Accordion summary="First" open={open == 1} onExpand={() => expand(1)}>
        <Faker></Faker>
      </Accordion>
      <Accordion summary="Second" open={open == 2} onExpand={() => expand(2)}>
        <Faker></Faker>
      </Accordion>
      <Accordion summary="Third" open={open == 3} onExpand={() => expand(3)}>
        <Faker></Faker>
      </Accordion>
    </div>
  );
};
export default AccordionPersistent;
