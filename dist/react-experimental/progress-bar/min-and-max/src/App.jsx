import '@htmlplus/ui/progress-bar.js';

function App() {
  return (
    <>
      <plus-progress-bar min={0} max={1} value={0.25}></plus-progress-bar>
      <br />
      <plus-progress-bar min={-10} max={10} value={0}></plus-progress-bar>
    </>
  );
}
export default App;
