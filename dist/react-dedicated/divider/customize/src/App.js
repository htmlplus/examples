import { Divider, Faker, Grid } from '@htmlplus/react';
const DividerCustomize = () => {
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
};
export default DividerCustomize;
