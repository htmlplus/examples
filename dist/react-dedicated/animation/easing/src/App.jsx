import { Animation, Grid } from '@htmlplus/react';

import '@htmlplus/core/animation/names/fading-exits/fade-out-down.js';

function App() {
  return (
    <>
      <Grid justifyContent="evenly" gutter="md">
        <Grid.Item xs="12" sm="auto">
          <Animation easing="linear" iterations={Infinity} name="fade-out-down" run></Animation>
        </Grid.Item>
        <Grid.Item xs="12" sm="auto">
          <Animation easing="ease-in" iterations={Infinity} name="fade-out-down" run></Animation>
        </Grid.Item>
        <Grid.Item xs="12" sm="auto">
          <Animation
            easing="cubic-bezier(0.25, 0.50, 0.25, 0.50)"
            iterations={Infinity}
            name="fade-out-down"
            run
          ></Animation>
        </Grid.Item>
      </Grid>
      <br />
      <br />
      <br />
    </>
  );
}
export default App;
