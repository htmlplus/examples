import '@htmlplus/core/faker.js';
import '@htmlplus/core/portal.js';
const PortalDefault = () => {
  return (
    <>
      <div id="target"></div>
      <div id="source">
        <plus-portal target="#target">
          <plus-faker></plus-faker>
        </plus-portal>
      </div>
    </>
  );
};
export default PortalDefault;
