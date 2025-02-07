import '@htmlplus/ui/snippet.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <plus-stack gap="0.5rem" items="stretch" vertical>
      <plus-snippet symbol="$" color="#808080">
        npm i @htmlplus/ui
      </plus-snippet>
      <plus-snippet symbol="$" color="#2fb344">
        npm i @htmlplus/ui
      </plus-snippet>
      <plus-snippet symbol="$" color="#d63939">
        npm i @htmlplus/ui
      </plus-snippet>
      <plus-snippet symbol="$" color="#f59f00">
        npm i @htmlplus/ui
      </plus-snippet>
      <plus-snippet symbol="$" color="#206bc4">
        npm i @htmlplus/ui
      </plus-snippet>
    </plus-stack>
  );
}
export default App;
