import { Accordion, Accordions, Faker } from '@htmlplus/react';
const AccordionPersistent = () => {
  return (
    <Accordions persistent>
      <Accordion summary="First">
        <Faker></Faker>
      </Accordion>
      <Accordion summary="Second">
        <Faker></Faker>
      </Accordion>
      <Accordion summary="Third">
        <Faker></Faker>
      </Accordion>
    </Accordions>
  );
};
export default AccordionPersistent;
