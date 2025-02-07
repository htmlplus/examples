import '@htmlplus/ui/snippet.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <plus-stack gap="0.5rem" items="stretch" vertical>
      <plus-snippet symbol="$" color="primary">
        npm i @htmlplus/ui
      </plus-snippet>
      <plus-snippet symbol="$" color="secondary">
        npm i @htmlplus/ui
      </plus-snippet>
      <plus-snippet symbol="$" color="tertiary">
        npm i @htmlplus/ui
      </plus-snippet>
    </plus-stack>
  );
}
export default App;
