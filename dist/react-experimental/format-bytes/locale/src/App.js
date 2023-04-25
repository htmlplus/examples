import '@htmlplus/core/format-bytes.js';
import '@htmlplus/core/stack.js';
const FormatBytesLocale = () => {
  return (
    <plus-stack vertical>
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
    </plus-stack>
  );
};
export default FormatBytesLocale;
