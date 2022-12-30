import { Cropper, Grid } from '@htmlplus/react';
const CropperBackdrop = () => {
  return (
    <Grid gutter="md">
      <Grid.Item xs="12" sm="6">
        <Cropper backdrop={false} src="/assets/images/panda.jpg"></Cropper>
      </Grid.Item>
      <Grid.Item xs="12" sm="6">
        <Cropper backdrop={true} src="/assets/images/panda.jpg"></Cropper>
      </Grid.Item>
    </Grid>
  );
};
export default CropperBackdrop;
