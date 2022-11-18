import { Animation, Grid } from '@htmlplus/react';
const AnimationName = () => {
  return (
    <Grid justifyContent="evenly" gutter="md">
      <Grid.Item xs="12" sm="auto">
        <Animation iterations="Infinity" name="fade-in" run></Animation>
      </Grid.Item>
      <Grid.Item xs="12" sm="auto">
        <Animation iterations="Infinity" name="fade-out" run></Animation>
      </Grid.Item>
    </Grid>
  );
};
export default AnimationName;
