import '@htmlplus/ui/cropper.js';

function App() {
  return (
    <div className="container">
      <plus-cropper src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"></plus-cropper>
      <plus-cropper
        transparent
        src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
      ></plus-cropper>
    </div>
  );
}
export default App;
