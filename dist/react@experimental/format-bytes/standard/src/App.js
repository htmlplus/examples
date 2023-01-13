import '@htmlplus/core/center.js';
import '@htmlplus/core/format-bytes.js';
const FormatBytesStandard = () => {
  return (
    <plus-center>
      <plus-format-bytes value="1000" standard="METRIC"></plus-format-bytes>
      <plus-format-bytes value="1024" standard="IEC"></plus-format-bytes>
    </plus-center>
  );
};
export default FormatBytesStandard;