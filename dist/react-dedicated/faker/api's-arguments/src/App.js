import { Faker } from '@htmlplus/react';
const FakerApiSArguments = () => {
  return <Faker api="lorem.paragraphs" arguments='[5, "\n\n"]'></Faker>;
};
export default FakerApiSArguments;
