import { Breadcrumb, Stack } from '@htmlplus/react';

function App() {
  return (
    <Stack gap="0.75rem" vertical>
      <Breadcrumb separator="/" max={4} offset={0}>
        <a href="#">Item 1</a>
        <a href="#">Item 2</a>
        <a href="#">Item 3</a>
        <a href="#">Item 4</a>
        <a href="#">Item 5</a>
        <a href="#">Item 6</a>
        <a href="#">Item 7</a>
        <a href="#">Item 8</a>
      </Breadcrumb>
      <Breadcrumb separator="/" max={4} offset={2}>
        <a href="#">Item 1</a>
        <a href="#">Item 2</a>
        <a href="#">Item 3</a>
        <a href="#">Item 4</a>
        <a href="#">Item 5</a>
        <a href="#">Item 6</a>
        <a href="#">Item 7</a>
        <a href="#">Item 8</a>
      </Breadcrumb>
      <Breadcrumb separator="/" max={4} offset={-1}>
        <a href="#">Item 1</a>
        <a href="#">Item 2</a>
        <a href="#">Item 3</a>
        <a href="#">Item 4</a>
        <a href="#">Item 5</a>
        <a href="#">Item 6</a>
        <a href="#">Item 7</a>
        <a href="#">Item 8</a>
      </Breadcrumb>
    </Stack>
  );
}
export default App;
