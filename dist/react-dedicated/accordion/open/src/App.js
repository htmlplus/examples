import { Accordion, Faker } from '@htmlplus/react';
const AccordionOpen = () => {
  return (
    <Accordion summary="Summary" open>
      <Faker></Faker>
    </Accordion>
  );
};
export default AccordionOpen;
