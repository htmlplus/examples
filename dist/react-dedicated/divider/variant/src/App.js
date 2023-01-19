import { Divider } from '@htmlplus/react';
const DividerVariant = () => {
  return (
    <div>
      <Divider variant="middle"></Divider>
      <br />
      <Divider variant="inset"></Divider>
      <br />
      <Divider variant="full"></Divider>
    </div>
  );
};
export default DividerVariant;
