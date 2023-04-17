import { Accordion, Faker } from '@htmlplus/react';
const AccordionAdvanced = () => {
  return (
    <Accordion>
      <div slot="summary">
        <span>Summary</span>
        <button>Action</button>
      </div>
      <Faker></Faker>
    </Accordion>
  );
};
export default AccordionAdvanced;
