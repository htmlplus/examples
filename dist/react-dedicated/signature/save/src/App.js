import { useRef } from 'react';

import { Center, Signature, Stack } from '@htmlplus/react';

function App() {
  const signatureRef = useRef();
  const save = (background) => {
    const image = new Image();
    image.src = signatureRef.current.toDataURL('image/svg+xml', background);
    const tab = open('', '_blank');
    setTimeout(() => {
      tab.document.write(image.outerHTML);
    }, 250);
  };
  return (
    <>
      <Center>
        <Signature backgroundColor="lightgray" ref={signatureRef}></Signature>
      </Center>
      <br />
      <Stack gap="1rem">
        <button onClick={() => save(true)}>Save With Background</button>
        <button onClick={() => save(false)}>Save Without Background</button>
      </Stack>
    </>
  );
}
export default App;
