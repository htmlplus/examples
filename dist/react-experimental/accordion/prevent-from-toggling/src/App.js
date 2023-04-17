import '@htmlplus/core/accordion.js';
import '@htmlplus/core/faker.js';
const AccordionPreventFromToggling = () => {
  const ensure = (type, event) => {
    if (window.confirm(`Are you sure you want to ${type} it?`)) return;
    event.preventDefault();
  };
  return (
    <plus-accordion
      summary="Summary"
      onplus-collapse={(event) => ensure('collapse', event)}
      onplus-expand={(event) => ensure('expand', event)}
    >
      <plus-faker></plus-faker>
    </plus-accordion>
  );
};
export default AccordionPreventFromToggling;
