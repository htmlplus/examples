import '@htmlplus/core/cropper.js';
import '@htmlplus/core/grid.js';
import '@htmlplus/core/grid-item.js';
const CropperZoomRatio = () => {
  return (
    <plus-grid gutter="md">
      <plus-grid-item xs="12" sm="6">
        <plus-cropper
          zoomable
          zoom-ratio="0.1"
          src="/assets/images/panda.jpg"
        ></plus-cropper>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="6">
        <plus-cropper
          zoomable
          zoom-ratio="1.0"
          src="/assets/images/panda.jpg"
        ></plus-cropper>
      </plus-grid-item>
    </plus-grid>
  );
};
export default CropperZoomRatio;
