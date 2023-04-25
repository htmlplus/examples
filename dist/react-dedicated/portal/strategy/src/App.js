import { Card, Faker, Portal } from '@htmlplus/react';
const PortalStrategy = () => {
  return (
    <>
      <Portal target="#before" strategy="before">
        <h1 className="title">Before the card</h1>
      </Portal>
      <Card outlined id="before">
        <Faker></Faker>
      </Card>
      <br />
      <Portal target="#prepend" strategy="prepend">
        <h1 className="title">Prepend the card</h1>
      </Portal>
      <Card outlined id="prepend">
        <Faker></Faker>
      </Card>
      <br />
      <Portal target="#append" strategy="append">
        <h1 className="title">Append the card</h1>
      </Portal>
      <Card outlined id="append">
        <Faker></Faker>
      </Card>
      <br />
      <Portal target="#after" strategy="after">
        <h1 className="title">After the card</h1>
      </Portal>
      <Card outlined id="after">
        <Faker></Faker>
      </Card>
    </>
  );
};
export default PortalStrategy;
