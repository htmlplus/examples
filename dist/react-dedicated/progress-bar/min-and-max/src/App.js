import { ProgressBar } from '@htmlplus/react';
const ProgressBarMinAndMax = () => {
  return (
    <div>
      <ProgressBar min="0.0" max="1.0" value="0.25"></ProgressBar>
      <br />
      <ProgressBar min="-10" max="+10" value="0.00"></ProgressBar>
    </div>
  );
};
export default ProgressBarMinAndMax;
