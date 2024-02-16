import '@htmlplus/core/faker.js';
import '@htmlplus/core/tabs-bar.js';
import '@htmlplus/core/tabs-panel.js';
import '@htmlplus/core/tabs-panels.js';
import '@htmlplus/core/tabs-tab.js';
import '@htmlplus/core/tabs.js';

function App() {
  return (
    <plus-tabs value="tab-1" vertical>
      <plus-tabs-bar>
        <plus-tabs-tab value="tab-1"> Tab 1 </plus-tabs-tab>
        <plus-tabs-tab value="tab-2"> Tab 2 </plus-tabs-tab>
        <plus-tabs-tab value="tab-3"> Tab 3 </plus-tabs-tab>
      </plus-tabs-bar>
      <plus-tabs-panels>
        <plus-tabs-panel value="tab-1">
          <b>Tab One</b>
          <br />
          <plus-faker></plus-faker>
        </plus-tabs-panel>
        <plus-tabs-panel value="tab-2">
          <b>Tab Two</b>
          <br />
          <plus-faker></plus-faker>
        </plus-tabs-panel>
        <plus-tabs-panel value="tab-3">
          <b>Tab Three</b>
          <br />
          <plus-faker></plus-faker>
        </plus-tabs-panel>
      </plus-tabs-panels>
    </plus-tabs>
  );
}
export default App;