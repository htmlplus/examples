import { Divider } from '@htmlplus/react';
const DividerType = () => {
  return (
    <div>
      <Divider type="dashed"></Divider>
      <br />
      <Divider type="dotted"></Divider>
      <br />
      <Divider type="double"></Divider>
      <br />
      <Divider type="groove"></Divider>
      <br />
      <Divider type="inset"></Divider>
      <br />
      <Divider type="outset"></Divider>
      <br />
      <Divider type="ridge"></Divider>
      <br />
      <Divider type="solid"></Divider>
    </div>
  );
};
export default DividerType;
