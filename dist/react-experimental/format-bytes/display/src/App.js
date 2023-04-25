import '@htmlplus/core/format-bytes.js';
import '@htmlplus/core/stack.js';
const FormatBytesDisplay = () => {
  return (
    <plus-stack vertical>
      <plus-format-bytes value="1000" display="short"></plus-format-bytes>
      <plus-format-bytes value="1000" display="long"></plus-format-bytes>
    </plus-stack>
  );
};
export default FormatBytesDisplay;
