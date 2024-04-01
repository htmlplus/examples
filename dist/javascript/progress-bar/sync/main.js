import '@htmlplus/ui/progress-bar.js';

function update() {
  if (!$sync || !$latency) return;
  const value = Math.random() * 100;
  $sync.value = value;
  $latency.value = value;
  setTimeout(() => update(), 100);
}
update();
