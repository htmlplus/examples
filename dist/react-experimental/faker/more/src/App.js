import '@htmlplus/core/faker.js';
const FakerMore = () => {
  return (
    <div className="container">
      <plus-faker api="name.fullName"></plus-faker>
      <plus-faker api="address.county"></plus-faker>
      <plus-faker api="date.weekday"></plus-faker>
      <plus-faker api="animal.dog"></plus-faker>
      <plus-faker api="internet.email"></plus-faker>
      <plus-faker api="phone.number"></plus-faker>
      <plus-faker api="color.human"></plus-faker>
      <plus-faker api="datatype.uuid"></plus-faker>
    </div>
  );
};
export default FakerMore;