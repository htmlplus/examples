import '@htmlplus/ui/cropper.js';

function App() {
  return (
    <div className="container">
      <div className="grid">
        <plus-cropper src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"></plus-cropper>
        <plus-cropper
          zoomable
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
        ></plus-cropper>
        <plus-cropper
          zoomable="touch"
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
        ></plus-cropper>
        <plus-cropper
          zoomable="wheel"
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
        ></plus-cropper>
      </div>
    </div>
  );
}
export default App;
