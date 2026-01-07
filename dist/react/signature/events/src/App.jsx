import '@htmlplus/ui/center.js';
import '@htmlplus/ui/signature.js';

function App() {
  function onPlusAfter(event) {
    console.log('after', event.detail);
  }
  function onPlusBefore(event) {
    console.log('before', event.detail);
  }
  function onPlusChange(event) {
    console.log('change', event.detail);
  }
  function onPlusEnd(event) {
    console.log('end', event.detail);
  }
  function onPlusReady() {
    console.log('ready');
  }
  function onPlusStart(event) {
    console.log('start', event.detail);
  }
  return (
    <plus-center>
      <plus-signature
        onPlusAfter={onPlusAfter}
        onPlusBefore={onPlusBefore}
        onPlusChange={onPlusChange}
        onPlusEnd={onPlusEnd}
        onPlusReady={onPlusReady}
        onPlusStart={onPlusStart}
      ></plus-signature>
    </plus-center>
  );
}
export default App;
