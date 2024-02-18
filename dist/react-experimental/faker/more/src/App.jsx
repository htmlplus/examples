import '@htmlplus/core/faker.js';
import '@htmlplus/core/stack.js';

function App() {
  return (
    <plus-stack vertical>
      <plus-faker api="person.fullName"></plus-faker>
      <plus-faker api="location.county"></plus-faker>
      <plus-faker api="date.weekday"></plus-faker>
      <plus-faker api="animal.dog"></plus-faker>
      <plus-faker api="internet.email"></plus-faker>
      <plus-faker api="phone.number"></plus-faker>
      <plus-faker api="color.human"></plus-faker>
      <plus-faker api="string.uuid"></plus-faker>
    </plus-stack>
  );
}
export default App;
