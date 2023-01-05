import { Divider, Sticky } from '@htmlplus/react';
const DividerSticky = () => {
  return (
    <div className="container">
      <Sticky>
        <Divider>
          <span>Today</span>
        </Divider>
      </Sticky>
      <Sticky>
        <Divider>
          <span>Yesterday</span>
        </Divider>
      </Sticky>
      <Sticky>
        <Divider>
          <span>5 Days Ago</span>
        </Divider>
      </Sticky>
      <Sticky>
        <Divider>
          <span>2 Weeks Ago</span>
        </Divider>
      </Sticky>
      <Sticky>
        <Divider>
          <span>1 Month Ago</span>
        </Divider>
      </Sticky>
    </div>
  );
};
export default DividerSticky;
