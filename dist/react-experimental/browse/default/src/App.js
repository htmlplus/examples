import '@htmlplus/core/browse.js';
const BrowseDefault = () => {
  const onChange = (event) => {
    const name = event.detail.files[0].file.name;
    alert(`File '${name}' selected.`);
  };
  return (
    <plus-browse droppable onplus-change={(event) => onChange(event)}>
      Click or Drag & Drop a file(s) here
    </plus-browse>
  );
};
export default BrowseDefault;
