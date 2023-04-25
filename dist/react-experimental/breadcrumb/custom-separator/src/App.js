import '@htmlplus/core/breadcrumb.js';
import '@htmlplus/core/center.js';
const BreadcrumbCustomSeparator = () => {
  return (
    <plus-center>
      <plus-breadcrumb>
        <svg slot="separator" viewBox="0 0 16 16">
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
        </svg>
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
