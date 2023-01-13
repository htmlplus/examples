import '@htmlplus/core/center.js';
import '@htmlplus/core/format-bytes.js';
const FormatBytesSigned = () => {
  return (
    <plus-center>
      <plus-format-bytes value="-1000"></plus-format-bytes>
      <plus-format-bytes value="-1000" signed></plus-format-bytes>
      <plus-format-bytes value="0"></plus-format-bytes>
      <plus-format-bytes value="0" signed></plus-format-bytes>
      <plus-format-bytes value="1000"></plus-format-bytes>
      <plus-format-bytes value="1000" signed></plus-format-bytes>
    </plus-center>
  );
};
export default FormatBytesSigned;
