import '@htmlplus/ui/center.js';
import '@htmlplus/ui/cropper.js';

$button.addEventListener('click', () => {
  $cropper.toCanvas().toBlob((blob) => {
    open(URL.createObjectURL(blob), '_blank');
  });
});
