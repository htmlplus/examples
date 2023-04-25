import '@htmlplus/core/faker.js';
import '@htmlplus/core/tabs.js';
import '@htmlplus/core/tabs-bar.js';
import '@htmlplus/core/tabs-panel.js';
import '@htmlplus/core/tabs-panels.js';
import '@htmlplus/core/tabs-tab.js';
const TabsSeparate = () => {
  return (
    <>
      <header>
        <plus-tabs value="1" connector="tabs-separate">
          <plus-tabs-bar>
            <plus-tabs-tab value="1">Tab 1</plus-tabs-tab>
            <plus-tabs-tab value="2">Tab 2</plus-tabs-tab>
            <plus-tabs-tab value="3">Tab 3</plus-tabs-tab>
          </plus-tabs-bar>
        </plus-tabs>
      </header>
      <section>
        <plus-tabs-panels connector="tabs-separate">
          <plus-tabs-panel value="1">
            <b>Tab One</b>
            <br />
            <plus-faker></plus-faker>
          </plus-tabs-panel>
          <plus-tabs-panel value="2">
            <b>Tab Two</b>
            <br />
            <plus-faker></plus-faker>
          </plus-tabs-panel>
          <plus-tabs-panel value="3">
            <b>Tab Three</b>
            <br />
            <plus-faker></plus-faker>
          </plus-tabs-panel>
        </plus-tabs-panels>
      </section>
    </>
  );
};
export default TabsSeparate;
