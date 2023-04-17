import '@htmlplus/core/accordion.js';
import '@htmlplus/core/faker.js';
const AccordionAdvanced = () => {
  return (
    <plus-accordion>
      <div slot="summary">
        <span>Summary</span>
        <button>Action</button>
      </div>
      <plus-faker></plus-faker>
    </plus-accordion>
  );
};
export default AccordionAdvanced;
