import { Browse } from '@htmlplus/react';

function App() {
  function onChange(event) {
    const name = event.detail.files[0].file.name;
    alert(`File '${name}' selected.`);
  }
  return (
    <Browse droppable onChange={onChange}>
      Click or Drag & Drop a file(s) here
    </Browse>
  );
}
export default App;
