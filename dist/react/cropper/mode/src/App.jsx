import '@htmlplus/ui/cropper.js';

function App() {
  return (
    <div className="container">
      <div className="grid">
        <plus-cropper
          mode="move"
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
          view="none"
        ></plus-cropper>
        <plus-cropper
          mode="crop"
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
        ></plus-cropper>
      </div>
    </div>
  );
}
export default App;
