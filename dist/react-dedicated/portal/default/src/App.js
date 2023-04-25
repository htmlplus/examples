import { Faker, Portal } from '@htmlplus/react';
const PortalDefault = () => {
  return (
    <>
      <div id="target"></div>
      <div id="source">
        <Portal target="#target">
          <Faker></Faker>
        </Portal>
      </div>
    </>
  );
};
export default PortalDefault;
