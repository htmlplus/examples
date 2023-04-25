import { Spinner, Stack } from '@htmlplus/react';
const SpinnerType = () => {
  return (
    <Stack gap="2rem">
      <Spinner type="default"></Spinner>
      <Spinner type="double-bounce"></Spinner>
      <Spinner type="ring"></Spinner>
      <Spinner type="ripple"></Spinner>
      <Spinner type="dual-ring"></Spinner>
      <Spinner type="square"></Spinner>
    </Stack>
  );
};
export default SpinnerType;
