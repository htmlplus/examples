import '@htmlplus/core/breadcrumb.js';
import '@htmlplus/core/icon.js';
const BreadcrumbCustomized = () => {
  return (
    <plus-breadcrumb max={2}>
      <plus-icon slot="separator" name="arrow-right-short"></plus-icon>
      <a href="#">HTMLPLUS</a>
      <a href="#">Core</a>
      <a href="#">UI Components</a>
      <a href="#">Breadcrumb</a>
    </plus-breadcrumb>
  );
};
export default BreadcrumbCustomized;
