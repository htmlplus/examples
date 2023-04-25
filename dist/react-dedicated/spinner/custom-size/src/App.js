import { Spinner, Stack } from '@htmlplus/react';
const SpinnerCustomSize = () => {
  return (
    <Stack gap="2rem">
      <Spinner size="sm"></Spinner>
      <Spinner size="md"></Spinner>
      <Spinner size="lg"></Spinner>
    </Stack>
  );
};
export default SpinnerCustomSize;
