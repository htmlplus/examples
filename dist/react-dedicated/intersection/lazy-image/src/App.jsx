import { Card, Intersection, Spinner } from '@htmlplus/react';

function App() {
  function onChange(event) {
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
      <Intersection once onChange={onChange}>
        <Card elevation={10}>
          <Spinner></Spinner>
          <img alt="Lazy Image" hidden data-src="https://placekitten.com/200/200" />
        </Card>
      </Intersection>
    </div>
  );
}
export default App;
