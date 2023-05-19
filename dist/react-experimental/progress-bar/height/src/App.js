import '@htmlplus/core/progress-bar.js';
const ProgressBarHeight = () => {
  return (
    <>
      <plus-progress-bar value="50" className="thin"></plus-progress-bar>
      <br />
      <plus-progress-bar value="50"></plus-progress-bar>
      <br />
      <plus-progress-bar value="50" className="thick"></plus-progress-bar>
    </>
  );
};
export default ProgressBarHeight;
