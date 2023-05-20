import { ProgressBar } from '@htmlplus/react';
const ProgressBarHeight = () => {
  return (
    <>
      <ProgressBar value="50" className="thin"></ProgressBar>
      <br />
      <ProgressBar value="50"></ProgressBar>
      <br />
      <ProgressBar value="50" className="thick"></ProgressBar>
    </>
  );
};
export default ProgressBarHeight;
