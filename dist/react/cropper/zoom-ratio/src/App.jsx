import '@htmlplus/ui/cropper.js';

function App() {
  return (
    <div className="container">
      <plus-cropper
        zoomable
        zoom-ratio={0.1}
        src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
      ></plus-cropper>
      <plus-cropper
        zoomable
        zoom-ratio={1}
        src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
      ></plus-cropper>
    </div>
  );
}
export default App;
