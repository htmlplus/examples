import { AspectRatio, Card, Center } from '@htmlplus/react';
const AspectRatioCard = () => {
  return (
    <Center>
      <Card outlined>
        <Card.Body>
          <AspectRatio value="16/9">
            <div className="placeholder"></div>
          </AspectRatio>
          <h3>Title</h3>
          <p>Description of the card.</p>
        </Card.Body>
      </Card>
    </Center>
  );
};
export default AspectRatioCard;
