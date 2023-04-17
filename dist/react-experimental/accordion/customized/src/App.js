import '@htmlplus/core/accordion.js';
import '@htmlplus/core/faker.js';
const AccordionCustomized = () => {
  return (
    <div>
      <plus-accordion summary="First">
        <plus-faker></plus-faker>
      </plus-accordion>
      <plus-accordion summary="Second">
        <plus-faker></plus-faker>
      </plus-accordion>
      <plus-accordion summary="Third">
        <plus-faker></plus-faker>
      </plus-accordion>
    </div>
  );
};
export default AccordionCustomized;
