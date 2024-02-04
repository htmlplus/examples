import '@htmlplus/core/progress-bar.js';

function App() {
  return (
    <>
      <plus-progress-bar value={50} class="thin"></plus-progress-bar>
      <br />
      <plus-progress-bar value={50}></plus-progress-bar>
      <br />
      <plus-progress-bar value={50} class="thick"></plus-progress-bar>
    </>
  );
}
export default App;
