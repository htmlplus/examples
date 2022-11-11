import '@htmlplus/core/dialog.js';
import '@htmlplus/core/dialog-body.js';
import '@htmlplus/core/dialog-content.js';
import '@htmlplus/core/dialog-toggler.js';
const DialogSticky = () => {
  return (
    <>
      <div className="center">
        <plus-dialog-toggler connector="dialog-sticky">
          Open
        </plus-dialog-toggler>
      </div>
      <plus-dialog animation="fade" connector="dialog-sticky" full-width sticky>
        <plus-dialog-content>
          <plus-dialog-body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </plus-dialog-body>
        </plus-dialog-content>
      </plus-dialog>
    </>
  );
};
export default DialogSticky;