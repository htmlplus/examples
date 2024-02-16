import '@htmlplus/core/avatar.js';
import '@htmlplus/core/center.js';

function App() {
  return (
    <plus-center>
      <plus-avatar>
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          style={{
            padding: '0.5em'
          }}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="12" cy="7" r="4"></circle>
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
        </svg>
      </plus-avatar>
    </plus-center>
  );
}
export default App;
