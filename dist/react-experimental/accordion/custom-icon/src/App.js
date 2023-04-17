import '@htmlplus/core/accordion.js';
import '@htmlplus/core/faker.js';
import '@htmlplus/core/icon.js';
const AccordionCustomIcon = () => {
  return (
    <plus-accordion summary="First">
      <plus-icon slot="icon-expand" name="plus"></plus-icon>
      <plus-icon slot="icon-collapse" name="minus"></plus-icon>
      <plus-faker></plus-faker>
    </plus-accordion>
  );
};
export default AccordionCustomIcon;
