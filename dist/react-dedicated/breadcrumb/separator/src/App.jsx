import { Breadcrumb, Center } from '@htmlplus/react';

function App() {
  return (
    <Center>
      <Breadcrumb separator="-">
        <a href="#">First</a>
        <a href="#">Second</a>
        <a href="#">Third</a>
        <a href="#">Fourth</a>
        <a href="#">Fifth</a>
      </Breadcrumb>
    </Center>
  );
}
export default App;
