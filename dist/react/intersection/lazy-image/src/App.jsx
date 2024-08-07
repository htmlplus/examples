import '@htmlplus/ui/card.js';
import '@htmlplus/ui/intersection.js';
import '@htmlplus/ui/spinner.js';

function App() {
  function onPlusChange(event) {
    if (!event.detail.isIntersecting) return;
    setTimeout(() => {
      const image = event.target.querySelector('img');
      const spinner = event.target.querySelector('plus-spinner');
      const src = image.getAttribute('data-src');
      image.setAttribute('src', src);
      image.hidden = false;
      spinner.hidden = true;
    }, 1000);
  }
  return (
    <div className="container">
      <plus-intersection once onPlusChange={onPlusChange}>
        <plus-card elevation={10}>
          <plus-spinner></plus-spinner>
          <img alt="Lazy Image" hidden data-src="https://picsum.photos/id/25/200/200" />
        </plus-card>
      </plus-intersection>
    </div>
  );
}
export default App;
