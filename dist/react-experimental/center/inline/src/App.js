import '@htmlplus/core/center.js';
import '@htmlplus/core/icon.js';
const CenterInline = () => {
  return (
    <plus-center>
      <button>
        <plus-center inline>
          <plus-icon size="2x">menu</plus-icon>
          &nbsp; Menu
        </plus-center>
      </button>
    </plus-center>
  );
};
export default CenterInline;
