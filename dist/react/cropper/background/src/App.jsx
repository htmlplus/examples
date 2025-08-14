import '@htmlplus/ui/cropper.js';

function App() {
  return (
    <div className="container">
      <plus-cropper
        view="none"
        src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
      ></plus-cropper>
      <plus-cropper
        background
        view="none"
        src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
      ></plus-cropper>
    </div>
  );
}
export default App;
