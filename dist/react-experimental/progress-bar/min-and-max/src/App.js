import '@htmlplus/core/progress-bar.js';
const ProgressBarMinAndMax = () => {
  return (
    <div>
      <plus-progress-bar min="0.0" max="1.0" value="0.25"></plus-progress-bar>
      <br />
      <plus-progress-bar min="-10" max="+10" value="0.00"></plus-progress-bar>
    </div>
  );
};
export default ProgressBarMinAndMax;
