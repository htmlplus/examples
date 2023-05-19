import { Progress } from '@htmlplus/react';
const ProgressBarMinAndMax = () => {
  return (
    <div>
      <Progress.Bar min="0.0" max="1.0" value="0.25"></Progress.Bar>
      <br />
      <Progress.Bar min="-10" max="+10" value="0.00"></Progress.Bar>
    </div>
  );
};
export default ProgressBarMinAndMax;
