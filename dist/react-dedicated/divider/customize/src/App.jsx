import { Divider, Faker, Grid } from '@htmlplus/react';

function App() {
  return (
    <Grid alignItems="center" justifyContent="evenly">
      <Grid.Item xs="5">
        <Faker></Faker>
      </Grid.Item>
      <Divider vertical></Divider>
      <Grid.Item xs="5">
        <Faker></Faker>
      </Grid.Item>
    </Grid>
  );
}
export default App;
