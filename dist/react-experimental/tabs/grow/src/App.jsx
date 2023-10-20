import '@htmlplus/core/tabs-bar.js';
import '@htmlplus/core/tabs-tab.js';
import '@htmlplus/core/tabs.js';

function App() {
  return (
    <plus-tabs>
      <plus-tabs-bar grow>
        <plus-tabs-tab> Tab 1 </plus-tabs-tab>
        <plus-tabs-tab> Tab 2 </plus-tabs-tab>
        <plus-tabs-tab> Tab 3 </plus-tabs-tab>
      </plus-tabs-bar>
    </plus-tabs>
  );
}
export default App;