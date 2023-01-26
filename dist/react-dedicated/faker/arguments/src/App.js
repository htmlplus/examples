import { Faker } from '@htmlplus/react';
const FakerArguments = () => {
  return <Faker api="lorem.paragraphs" arguments='[5, "\n\n"]'></Faker>;
};
export default FakerArguments;
