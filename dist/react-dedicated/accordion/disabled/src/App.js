import { Accordion, Faker } from '@htmlplus/react';
const AccordionDisabled = () => {
  return (
    <div>
      <Accordion summary="First">
        <Faker></Faker>
      </Accordion>
      <Accordion summary="Second">
        <Faker></Faker>
      </Accordion>
      <Accordion summary="Third" disabled>
        <Faker></Faker>
      </Accordion>
    </div>
  );
};
export default AccordionDisabled;
