import '@htmlplus/core/center.js';
import '@htmlplus/core/signature.js';
import '@htmlplus/core/stack.js';

const save = (background) => {
  const image = new Image();
  image.src = $signature.toDataURL('image/svg+xml', background);
  const tab = open('', '_blank');
  setTimeout(() => {
    tab.document.write(image.outerHTML);
  }, 250);
};
$with.addEventListener('click', () => save(true));
$without.addEventListener('click', () => save(false));
