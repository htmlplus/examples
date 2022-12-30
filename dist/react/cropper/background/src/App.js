import { Cropper, Grid } from '@htmlplus/react';
const CropperBackground = () => {
  return (
    <Grid gutter="md">
      <Grid.Item xs="12" sm="6">
        <Cropper
          background={false}
          view="none"
          src="/assets/images/panda.jpg"
        ></Cropper>
      </Grid.Item>
      <Grid.Item xs="12" sm="6">
        <Cropper
          background={true}
          view="none"
          src="/assets/images/panda.jpg"
        ></Cropper>
      </Grid.Item>
    </Grid>
  );
};
export default CropperBackground;
