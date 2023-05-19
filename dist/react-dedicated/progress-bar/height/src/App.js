import { Progress } from '@htmlplus/react';
const ProgressBarHeight = () => {
  return (
    <>
      <Progress.Bar value="50" className="thin"></Progress.Bar>
      <br />
      <Progress.Bar value="50"></Progress.Bar>
      <br />
      <Progress.Bar value="50" className="thick"></Progress.Bar>
    </>
  );
};
export default ProgressBarHeight;
