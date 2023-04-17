import { Accordion, Faker } from '@htmlplus/react';
const AccordionPreventFromToggling = () => {
  const ensure = (type, event) => {
    if (window.confirm(`Are you sure you want to ${type} it?`)) return;
    event.preventDefault();
  };
  return (
    <Accordion
      summary="Summary"
      onCollapse={(event) => ensure('collapse', event)}
      onExpand={(event) => ensure('expand', event)}
    >
      <Faker></Faker>
    </Accordion>
  );
};
export default AccordionPreventFromToggling;
