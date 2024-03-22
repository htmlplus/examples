import '@htmlplus/ui/aspect-ratio.js';

function App() {
  return (
    <plus-aspect-ratio value="18/6">
      <img
        src="https://picsum.photos/id/95/640/640"
        style={{
          objectFit: 'cover'
        }}
      />
    </plus-aspect-ratio>
  );
}
export default App;
