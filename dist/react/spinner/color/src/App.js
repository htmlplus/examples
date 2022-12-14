import { Grid, Spinner } from '@htmlplus/react';
const SpinnerColor = () => {
  return (
    <Grid justifyContent="evenly">
      <Grid.Item>
        <Spinner size="md" className="spinner-1"></Spinner>
      </Grid.Item>
      <Grid.Item>
        <Spinner size="md" className="spinner-2"></Spinner>
      </Grid.Item>
      <Grid.Item>
        <Spinner size="md" className="spinner-3"></Spinner>
      </Grid.Item>
      <Grid.Item>
        <Spinner size="md" className="spinner-4"></Spinner>
      </Grid.Item>
      <Grid.Item>
        <Spinner size="md" className="spinner-5"></Spinner>
      </Grid.Item>
    </Grid>
  );
};
export default SpinnerColor;
