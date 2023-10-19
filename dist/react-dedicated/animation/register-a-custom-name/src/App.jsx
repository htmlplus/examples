import { Animation, Avatar, Center } from '@htmlplus/react';

function App() {
  return (
    <Center>
      <Avatar shape="circle">
        <Animation
          delay={0}
          duration={2000}
          iterations={Infinity}
          name="custom-pulse"
          run
        ></Animation>
        <Animation
          delay={1000}
          duration={2000}
          iterations={Infinity}
          name="custom-pulse"
          run
        ></Animation>
        <img src="https://picsum.photos/id/64/90/90" />
      </Avatar>
    </Center>
  );
}
export default App;