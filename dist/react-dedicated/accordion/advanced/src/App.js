import { Accordion, Faker, Stack } from '@htmlplus/react';
const AccordionAdvanced = () => {
  return (
    <Accordion>
      <Stack slot="summary" justifyContent="space-between">
        <span>Summary</span>
        <button>Action</button>
      </Stack>
      <Faker></Faker>
    </Accordion>
  );
};
export default AccordionAdvanced;
