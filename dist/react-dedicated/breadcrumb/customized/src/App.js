import { Breadcrumb, Icon } from '@htmlplus/react';

function App() {
  return (
    <Breadcrumb max={2}>
      <Icon slot="separator" name="arrow-right-short"></Icon>
      <a href="#">HTMLPLUS</a>
      <a href="#">Core</a>
      <a href="#">UI Components</a>
      <a href="#">Breadcrumb</a>
    </Breadcrumb>
  );
}
export default App;
