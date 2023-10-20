import '@htmlplus/core/center.js';
import '@htmlplus/core/counter.js';

function App() {
  const numerals = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return (
    <plus-center>
      <plus-counter to={1000} play numerals={numerals}></plus-counter>
    </plus-center>
  );
}
export default App;