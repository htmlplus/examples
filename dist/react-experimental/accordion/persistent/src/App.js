import '@htmlplus/core/accordion.js';
import '@htmlplus/core/accordions.js';
import '@htmlplus/core/faker.js';
const AccordionPersistent = () => {
  return (
    <plus-accordions persistent>
      <plus-accordion summary="First">
        <plus-faker></plus-faker>
      </plus-accordion>
      <plus-accordion summary="Second">
        <plus-faker></plus-faker>
      </plus-accordion>
      <plus-accordion summary="Third">
        <plus-faker></plus-faker>
      </plus-accordion>
    </plus-accordions>
  );
};
export default AccordionPersistent;
