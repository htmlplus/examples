import { AspectRatio } from '@htmlplus/react';

function App() {
  return (
    <AspectRatio value="18/6">
      <img
        src="https://picsum.photos/id/95/640/640"
        style={{
          objectFit: 'cover'
        }}
      />
    </AspectRatio>
  );
}
export default App;
