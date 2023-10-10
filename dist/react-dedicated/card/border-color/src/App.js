import { Card, Grid } from '@htmlplus/react';

function App() {
  return (
    <Grid justifyContent="evenly" gutter="md">
      <Grid.Item xs="12" sm="auto">
        <Card className="pink" outlined></Card>
      </Grid.Item>
      <Grid.Item xs="12" sm="auto">
        <Card className="yellow" outlined></Card>
      </Grid.Item>
      <Grid.Item xs="12" sm="auto">
        <Card className="blue" outlined></Card>
      </Grid.Item>
    </Grid>
  );
}
export default App;
