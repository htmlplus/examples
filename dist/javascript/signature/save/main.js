import '@htmlplus/ui/center.js';
import '@htmlplus/ui/signature.js';

$save.addEventListener('click', () => {
  const tab = open('', '_blank');
  setTimeout(() => {
    tab.document.write($signature.value);
  }, 250);
});
