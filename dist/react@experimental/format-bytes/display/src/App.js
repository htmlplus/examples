import '@htmlplus/core/center.js';
import '@htmlplus/core/format-bytes.js';
const FormatBytesDisplay = () => {
  return (
    <plus-center>
      <plus-format-bytes value="1000" display="short"></plus-format-bytes>
      <plus-format-bytes value="1000" display="long"></plus-format-bytes>
    </plus-center>
  );
};
export default FormatBytesDisplay;
