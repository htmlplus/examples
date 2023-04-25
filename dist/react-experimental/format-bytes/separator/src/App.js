import '@htmlplus/core/format-bytes.js';
import '@htmlplus/core/stack.js';
const FormatBytesSeparator = () => {
  return (
    <plus-stack vertical>
      <plus-format-bytes value="1000" separator=""></plus-format-bytes>
      <plus-format-bytes value="1000" separator=" "></plus-format-bytes>
    </plus-stack>
  );
};
export default FormatBytesSeparator;
