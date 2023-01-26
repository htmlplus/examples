import '@htmlplus/core/faker.js';
const FakerArguments = () => {
  return (
    <plus-faker api="lorem.paragraphs" arguments='[5, "\n\n"]'></plus-faker>
  );
};
export default FakerArguments;
