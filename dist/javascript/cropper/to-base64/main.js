import '@htmlplus/ui/center.js';
import '@htmlplus/ui/cropper.js';

$button.addEventListener('click', () => {
  const image = new Image();
  image.src = $cropper.toCanvas().toDataURL();
  const tab = open('', '_blank');
  setTimeout(() => {
    tab.document.write(image.outerHTML);
  }, 250);
});
