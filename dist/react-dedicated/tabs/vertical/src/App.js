import { Faker, Tabs } from '@htmlplus/react';
const TabsVertical = () => {
  return (
    <Tabs value="1" vertical>
      <Tabs.Bar>
        <Tabs.Tab value="1">Tab 1</Tabs.Tab>
        <Tabs.Tab value="2">Tab 2</Tabs.Tab>
        <Tabs.Tab value="3">Tab 3</Tabs.Tab>
      </Tabs.Bar>
      <Tabs.Panels>
        <Tabs.Panel value="1">
          <b>Tab One</b>
          <br />
          <Faker></Faker>
        </Tabs.Panel>
        <Tabs.Panel value="2">
          <b>Tab Two</b>
          <br />
          <Faker></Faker>
        </Tabs.Panel>
        <Tabs.Panel value="3">
          <b>Tab Three</b>
          <br />
          <Faker></Faker>
        </Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  );
};
export default TabsVertical;
