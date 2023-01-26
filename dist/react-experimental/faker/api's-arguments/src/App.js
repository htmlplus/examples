import '@htmlplus/core/faker.js';
const FakerApiSArguments = () => {
  return (
    <plus-faker api="lorem.paragraphs" arguments='[5, "\n\n"]'></plus-faker>
  );
};
export default FakerApiSArguments;
