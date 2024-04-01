import '@htmlplus/ui/progress-bar.js';

function App() {
  return (
    <>
      <plus-progress-bar value={50} color="primary"></plus-progress-bar>
      <br />
      <plus-progress-bar value={30} color="secondary"></plus-progress-bar>
      <br />
      <plus-progress-bar value={70} color="tertiary"></plus-progress-bar>
    </>
  );
}
export default App;
