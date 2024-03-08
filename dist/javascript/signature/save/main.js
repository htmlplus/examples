import '@htmlplus/core/center.js';
import '@htmlplus/core/signature.js';

$save.addEventListener('click', () => {
  const tab = open('', '_blank');
  setTimeout(() => {
    tab.document.write($signature.value);
  }, 250);
});
