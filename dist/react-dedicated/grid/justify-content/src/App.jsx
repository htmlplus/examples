import { Grid } from '@htmlplus/react';

function App() {
  return (
    <Grid justifyContent="center">
      <Grid.Item xs="2">
        <div>Item</div>
      </Grid.Item>
      <Grid.Item xs="2">
        <div>Item</div>
      </Grid.Item>
      <Grid.Item xs="2">
        <div>Item</div>
      </Grid.Item>
    </Grid>
  );
}
export default App;
