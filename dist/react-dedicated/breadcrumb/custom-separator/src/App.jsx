import { Breadcrumb, Center, Icon } from '@htmlplus/react';

function App() {
  return (
    <Center>
      <Breadcrumb>
        <Icon slot="separator" name="caret-right-fill"></Icon>
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
