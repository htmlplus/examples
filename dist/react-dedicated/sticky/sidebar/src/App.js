import { Faker, Grid, Sticky } from '@htmlplus/react';
const StickySidebar = () => {
  return (
    <div className="container">
      <header>Header</header>
      <Grid>
        <Grid.Item xs="7">
          <Faker type="lorem.paragraphs" arguments='[10, "\n\n"]'></Faker>
        </Grid.Item>
        <Grid.Item xs="5">
          <br />
          <Sticky>
            <aside>A Sticky Sidebar</aside>
          </Sticky>
        </Grid.Item>
      </Grid>
    </div>
  );
};
export default StickySidebar;
