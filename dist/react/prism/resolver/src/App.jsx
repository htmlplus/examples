import '@htmlplus/ui/prism.js';

function App() {
  return (
    <plus-prism
      language="python"
      theme="solarizedlight"
      plugins={{
        'line-numbers': true
      }}
    >
      print("Hello, World!")
    </plus-prism>
  );
}
export default App;
