import '@htmlplus/core/browse.js';

function App() {
  function onPlusChange(event) {
    const name = event.detail.files[0].file.name;
    alert(`File '${name}' selected.`);
  }
  return (
    <plus-browse droppable onplus-change={onPlusChange}>
      {' '}
      Click or Drag & Drop a file(s) here{' '}
    </plus-browse>
  );
}
export default App;
