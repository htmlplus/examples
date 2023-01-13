import '@htmlplus/core/center.js';
import '@htmlplus/core/format-bytes.js';
const FormatBytesLocale = () => {
  return (
    <plus-center>
      <plus-format-bytes
        value="10000100"
        locale="en"
        unit="kilo"
      ></plus-format-bytes>
      <plus-format-bytes
        value="10000100"
        locale="de"
        unit="kilo"
      ></plus-format-bytes>
    </plus-center>
  );
};
export default FormatBytesLocale;
