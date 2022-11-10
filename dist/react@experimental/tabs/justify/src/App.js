import '@htmlplus/core/tabs.js';
import '@htmlplus/core/tabs-bar.js';
import '@htmlplus/core/tabs-tab.js';
const TabsJustify = () => {
  return (
    <>
      <plus-tabs>
        <plus-tabs-bar justify="start">
          <plus-tabs-tab>Tab 1</plus-tabs-tab>
          <plus-tabs-tab>Tab 2</plus-tabs-tab>
          <plus-tabs-tab>Tab 3</plus-tabs-tab>
        </plus-tabs-bar>
      </plus-tabs>
      <br />
      <plus-tabs>
        <plus-tabs-bar justify="center">
          <plus-tabs-tab>Tab 1</plus-tabs-tab>
          <plus-tabs-tab>Tab 2</plus-tabs-tab>
          <plus-tabs-tab>Tab 3</plus-tabs-tab>
        </plus-tabs-bar>
      </plus-tabs>
      <br />
      <plus-tabs>
        <plus-tabs-bar justify="end">
          <plus-tabs-tab>Tab 1</plus-tabs-tab>
          <plus-tabs-tab>Tab 2</plus-tabs-tab>
          <plus-tabs-tab>Tab 3</plus-tabs-tab>
        </plus-tabs-bar>
      </plus-tabs>
    </>
  );
};
export default TabsJustify;
