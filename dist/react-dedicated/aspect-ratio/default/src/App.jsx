import { AspectRatio, Card } from '@htmlplus/react';

function App() {
  return (
    <AspectRatio value="16/9">
      <Card tile>
        <Card.Body>This box will always be 16/9 (unless you put more stuff in it)</Card.Body>
      </Card>
    </AspectRatio>
  );
}
export default App;