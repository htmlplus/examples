import { ProgressBar } from '@htmlplus/react';

function App() {
  return (
    <>
      <ProgressBar value={50} className="thin"></ProgressBar>
      <br />
      <ProgressBar value={50}></ProgressBar>
      <br />
      <ProgressBar value={50} className="thick"></ProgressBar>
    </>
  );
}
export default App;
