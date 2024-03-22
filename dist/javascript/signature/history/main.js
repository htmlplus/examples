import '@htmlplus/ui/center.js';
import '@htmlplus/ui/signature.js';
import '@htmlplus/ui/stack.js';

const sync = () => {
  $undo.disabled = !$signature.undoable;
  $redo.disabled = !$signature.redoable;
};
$undo.addEventListener('click', () => {
  $signature.undo();
  sync();
});
$redo.addEventListener('click', () => {
  $signature.redo();
  sync();
});
$signature.addEventListener('plus-end', () => {
  sync();
});
