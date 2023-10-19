import { Faker, Tabs } from '@htmlplus/react';

function App() {
  return (
    <Tabs value="tab-1" vertical>
      <Tabs.Bar>
        <Tabs.Tab value="tab-1"> Tab 1 </Tabs.Tab>
        <Tabs.Tab value="tab-2"> Tab 2 </Tabs.Tab>
        <Tabs.Tab value="tab-3"> Tab 3 </Tabs.Tab>
      </Tabs.Bar>
      <Tabs.Panels>
        <Tabs.Panel value="tab-1">
          <b>Tab One</b>
          <br />
          <Faker></Faker>
        </Tabs.Panel>
        <Tabs.Panel value="tab-2">
          <b>Tab Two</b>
          <br />
          <Faker></Faker>
        </Tabs.Panel>
        <Tabs.Panel value="tab-3">
          <b>Tab Three</b>
          <br />
          <Faker></Faker>
        </Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  );
}
export default App;
