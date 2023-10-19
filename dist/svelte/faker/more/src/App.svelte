<script>
  import '@htmlplus/core/faker.js';
  import '@htmlplus/core/stack.js';
</script>

<plus-stack vertical>
  <plus-faker api="name.fullName"></plus-faker>
  <plus-faker api="address.county"></plus-faker>
  <plus-faker api="date.weekday"></plus-faker>
  <plus-faker api="animal.dog"></plus-faker>
  <plus-faker api="internet.email"></plus-faker>
  <plus-faker api="phone.number"></plus-faker>
  <plus-faker api="color.human"></plus-faker>
  <plus-faker api="datatype.uuid"></plus-faker>
</plus-stack>
