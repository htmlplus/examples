import { Cropper, Grid } from '@htmlplus/react';

function App() {
  return (
    <Grid gutter="md">
      <Grid.Item xs="12" sm="6">
        <Cropper
          mode="move"
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
          view="none"
        ></Cropper>
      </Grid.Item>
      <Grid.Item xs="12" sm="6">
        <Cropper
          mode="crop"
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
        ></Cropper>
      </Grid.Item>
    </Grid>
  );
}
export default App;
