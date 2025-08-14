import '@htmlplus/ui/progress-bar.js';

function App() {
  return (
    <>
      <plus-progress-bar value={50} className="thin"></plus-progress-bar>
      <br />
      <plus-progress-bar value={50}></plus-progress-bar>
      <br />
      <plus-progress-bar value={50} className="thick"></plus-progress-bar>
    </>
  );
}
export default App;
