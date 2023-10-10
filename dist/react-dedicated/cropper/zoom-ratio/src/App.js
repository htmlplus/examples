import { Cropper, Grid } from '@htmlplus/react';

function App() {
  return (
    <Grid gutter="md">
      <Grid.Item xs="12" sm="6">
        <Cropper
          zoomable
          zoomRatio={0.1}
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
        ></Cropper>
      </Grid.Item>
      <Grid.Item xs="12" sm="6">
        <Cropper
          zoomable
          zoomRatio={1}
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
        ></Cropper>
      </Grid.Item>
    </Grid>
  );
}
export default App;
