import '@htmlplus/core/center.js';
import '@htmlplus/core/cropper.js';

$button.addEventListener('click', () => {
  $cropper.toCanvas().toBlob((blob) => {
    open(URL.createObjectURL(blob), '_blank');
  });
});
