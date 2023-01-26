import { Faker } from '@htmlplus/react';
const FakerMore = () => {
  return (
    <div className="container">
      <Faker api="name.fullName"></Faker>
      <Faker api="address.county"></Faker>
      <Faker api="date.weekday"></Faker>
      <Faker api="animal.dog"></Faker>
      <Faker api="internet.email"></Faker>
      <Faker api="phone.number"></Faker>
      <Faker api="color.human"></Faker>
      <Faker api="datatype.uuid"></Faker>
    </div>
  );
};
export default FakerMore;
