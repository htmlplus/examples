import '@htmlplus/core/center.js';
import '@htmlplus/core/format-bytes.js';
const FormatBytesSeparator = () => {
  return (
    <plus-center>
      <plus-format-bytes value="1000" separator=""></plus-format-bytes>
      <plus-format-bytes value="1000" separator=" "></plus-format-bytes>
    </plus-center>
  );
};
export default FormatBytesSeparator;
