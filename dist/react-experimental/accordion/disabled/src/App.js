import '@htmlplus/core/accordion.js';
import '@htmlplus/core/faker.js';
const AccordionDisabled = () => {
  return (
    <div>
      <plus-accordion summary="First">
        <plus-faker></plus-faker>
      </plus-accordion>
      <plus-accordion summary="Second">
        <plus-faker></plus-faker>
      </plus-accordion>
      <plus-accordion summary="Third" disabled>
        <plus-faker></plus-faker>
      </plus-accordion>
    </div>
  );
};
export default AccordionDisabled;
