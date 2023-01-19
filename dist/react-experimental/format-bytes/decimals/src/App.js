import '@htmlplus/core/center.js';
import '@htmlplus/core/format-bytes.js';
const FormatBytesDecimals = () => {
  return (
    <plus-center>
      <plus-format-bytes value="1200" decimals="0"></plus-format-bytes>
      <plus-format-bytes value="1200" decimals="3"></plus-format-bytes>
      <plus-format-bytes value="1200" decimals="[3, 3]"></plus-format-bytes>
      <plus-format-bytes value="1000" decimals="[0, 3]"></plus-format-bytes>
      <plus-format-bytes value="1000" decimals="[1, 3]"></plus-format-bytes>
      <plus-format-bytes value="1001" decimals="[0, 3]"></plus-format-bytes>
    </plus-center>
  );
};
export default FormatBytesDecimals;
