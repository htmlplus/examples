import { Animation, Grid } from '@htmlplus/react';
const AnimationEasing = () => {
  return (
    <Grid justifyContent="evenly" gutter="md">
      <Grid.Item xs="12" sm="auto">
        <Animation
          easing="ease-in"
          iterations="Infinity"
          name="fade-in"
          run
        ></Animation>
      </Grid.Item>
      <Grid.Item xs="12" sm="auto">
        <Animation
          easing="ease-out"
          iterations="Infinity"
          name="fade-in"
          run
        ></Animation>
      </Grid.Item>
    </Grid>
  );
};
export default AnimationEasing;
