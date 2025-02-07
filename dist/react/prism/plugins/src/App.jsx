import '@htmlplus/ui/prism.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <plus-stack gap="0.5rem" items="stretch" vertical>
      <plus-prism
        plugins={{
          'line-numbers': true
        }}
      >
        const name = '@htmlplus/ui';
      </plus-prism>
      <plus-prism
        plugins={{
          'line-numbers': {
            start: 5
          }
        }}
      >
        const name = '@htmlplus/ui';
      </plus-prism>
    </plus-stack>
  );
}
export default App;
