import '@htmlplus/core/breadcrumb.js';
import '@htmlplus/core/center.js';
import '@htmlplus/core/icon.js';
const BreadcrumbCustomSeparator = () => {
  return (
    <plus-center>
      <plus-breadcrumb>
        <plus-icon slot="separator" name="caret-right-fill"></plus-icon>
        <a href="#">First</a>
        <a href="#">Second</a>
        <a href="#">Third</a>
        <a href="#">Fourth</a>
        <a href="#">Fifth</a>
      </plus-breadcrumb>
    </plus-center>
  );
};
export default BreadcrumbCustomSeparator;
