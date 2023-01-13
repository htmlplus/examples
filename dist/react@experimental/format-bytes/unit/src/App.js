import '@htmlplus/core/center.js';
import '@htmlplus/core/format-bytes.js';
const FormatBytesUnit = () => {
  return (
    <plus-center>
      <plus-format-bytes unit="auto" value="1000"></plus-format-bytes>
      <plus-format-bytes unit="base" value="10000"></plus-format-bytes>
      <plus-format-bytes unit="kilo" value="100000"></plus-format-bytes>
      <plus-format-bytes unit="kilo" value="1000000"></plus-format-bytes>
      <plus-format-bytes unit="kilo" value="10000000"></plus-format-bytes>
      <plus-format-bytes unit="kilo" value="100000000"></plus-format-bytes>
      <plus-format-bytes unit="kilo" value="1000000000"></plus-format-bytes>
    </plus-center>
  );
};
export default FormatBytesUnit;
