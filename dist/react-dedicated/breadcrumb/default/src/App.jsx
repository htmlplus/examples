import { Breadcrumb, Center } from '@htmlplus/react';

function App() {
  return (
    <Center>
      <Breadcrumb separator="/">
        <a href="#">HTMLPLUS</a>
        <a href="#">Core</a>
        <a href="#">UI Elements</a>
        <span>Breadcrumb</span>
      </Breadcrumb>
    </Center>
  );
}
export default App;
