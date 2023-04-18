import { Accordion, Faker, Icon } from '@htmlplus/react';
const AccordionCustomIcon = () => {
  return (
    <Accordion summary="First">
      <Icon slot="icon-expand" name="square-plus"></Icon>
      <Icon slot="icon-collapse" name="square-minus"></Icon>
      <Faker></Faker>
    </Accordion>
  );
};
export default AccordionCustomIcon;
