import { Avatar, Stack } from '@htmlplus/react';

function App() {
  return (
    <Stack gap="8rem">
      <Avatar size="xxl">
        <div slot="bottom">bottom</div>
        <div slot="center">center</div>
        <div slot="left">left</div>
        <div slot="left-bottom">left-bottom</div>
        <div slot="left-top">left-top</div>
        <div slot="right">right</div>
        <div slot="right-bottom">right-bottom</div>
        <div slot="right-top">right-top</div>
        <div slot="top">top</div>
      </Avatar>
      <Avatar size="xxl">
        <div slot="bottom">bottom</div>
        <div slot="center">center</div>
        <div slot="end">end</div>
        <div slot="end-bottom">end-bottom</div>
        <div slot="end-top">end-top</div>
        <div slot="start">start</div>
        <div slot="start-bottom">start-bottom</div>
        <div slot="start-top">start-top</div>
        <div slot="top">top</div>
      </Avatar>
    </Stack>
  );
}
export default App;
