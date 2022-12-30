import '@htmlplus/core/cropper.js';
import '@htmlplus/core/grid.js';
import '@htmlplus/core/grid-item.js';
const CropperBackdrop = () => {
  return (
    <plus-grid gutter="md">
      <plus-grid-item xs="12" sm="6">
        <plus-cropper
          backdrop={false}
          src="/assets/images/panda.jpg"
        ></plus-cropper>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="6">
        <plus-cropper
          backdrop={true}
          src="/assets/images/panda.jpg"
        ></plus-cropper>
      </plus-grid-item>
    </plus-grid>
  );
};
export default CropperBackdrop;
