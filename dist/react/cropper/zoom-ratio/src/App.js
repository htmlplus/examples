import { Cropper, Grid } from '@htmlplus/react';
const CropperZoomRatio = () => {
  return (
    <Grid gutter="md">
      <Grid.Item xs="12" sm="6">
        <Cropper
          zoomable
          zoomRatio="0.1"
          src="/assets/images/panda.jpg"
        ></Cropper>
      </Grid.Item>
      <Grid.Item xs="12" sm="6">
        <Cropper
          zoomable
          zoomRatio="1.0"
          src="/assets/images/panda.jpg"
        ></Cropper>
      </Grid.Item>
    </Grid>
  );
};
export default CropperZoomRatio;
