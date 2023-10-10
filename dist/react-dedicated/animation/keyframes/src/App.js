import { Animation } from '@htmlplus/react';

function App() {
  const keyframes = [
    {
      transform: 'scale(0) rotate(0deg) translate(-50%, -50%)',
      opacity: '1'
    },
    {
      transform: 'scale(7) rotate(960deg) translate(-50%, -50%)',
      opacity: '0'
    }
  ];
  return (
    <div className="root">
      <Animation duration={5000} iterations={Infinity} run keyframes={keyframes}></Animation>
    </div>
  );
}
export default App;
