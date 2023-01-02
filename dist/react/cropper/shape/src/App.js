import { Cropper, Grid } from '@htmlplus/react';
const CropperShape = () => {
  return (
    <Grid gutter="md">
      <Grid.Item xs="12" sm="6">
        <Cropper
          shape="rectangle"
          aspectRatio="2"
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
        ></Cropper>
      </Grid.Item>
      <Grid.Item xs="12" sm="6">
        <Grid gutter="md">
          <Grid.Item xs="12">
            <Cropper
              shape="square"
              src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
            ></Cropper>
          </Grid.Item>
          <Grid.Item xs="12">
            <Cropper
              shape="circle"
              src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
            ></Cropper>
          </Grid.Item>
        </Grid>
      </Grid.Item>
    </Grid>
  );
};
export default CropperShape;
