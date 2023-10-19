import '@htmlplus/core/center.js';
import '@htmlplus/core/signature.js';
import '@htmlplus/core/stack.js';

const sync = () => {
  $undo.disabled = !$signature.canUndo();
  $redo.disabled = !$signature.canRedo();
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
