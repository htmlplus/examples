import '@htmlplus/ui/cropper.js';
import '@htmlplus/ui/grid-item.js';
import '@htmlplus/ui/grid.js';

function App() {
  return (
    <div className="container">
      <div className="grid">
        <plus-cropper
          class="style-1"
          indicator
          mode="crop"
          shape="circle"
          resizer="main"
          resizer-shape="line"
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
        ></plus-cropper>
        <plus-cropper
          class="style-2"
          indicator
          mode="crop"
          resizer="both"
          resizer-shape="line"
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
        ></plus-cropper>
        <plus-cropper
          class="style-3"
          guides
          indicator
          mode="crop"
          resizer="main"
          resizer-shape="circle"
          shape="circle"
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
        ></plus-cropper>
        <plus-cropper
          class="style-4"
          guides
          mode="crop"
          resizer="edge"
          resizer-shape="line"
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
        ></plus-cropper>
        <plus-cropper
          class="style-5"
          backdrop
          background
          mode="crop"
          resizer="edge"
          resizer-shape="line"
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
        ></plus-cropper>
        <plus-cropper
          class="style-6"
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
        ></plus-cropper>
      </div>
    </div>
  );
}
export default App;
