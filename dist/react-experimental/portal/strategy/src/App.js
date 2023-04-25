import '@htmlplus/core/card.js';
import '@htmlplus/core/faker.js';
import '@htmlplus/core/portal.js';
const PortalStrategy = () => {
  return (
    <>
      <plus-portal target="#before" strategy="before">
        <h1 className="title">Before the card</h1>
      </plus-portal>
      <plus-card outlined id="before">
        <plus-faker></plus-faker>
      </plus-card>
      <br />
      <plus-portal target="#prepend" strategy="prepend">
        <h1 className="title">Prepend the card</h1>
      </plus-portal>
      <plus-card outlined id="prepend">
        <plus-faker></plus-faker>
      </plus-card>
      <br />
      <plus-portal target="#append" strategy="append">
        <h1 className="title">Append the card</h1>
      </plus-portal>
      <plus-card outlined id="append">
        <plus-faker></plus-faker>
      </plus-card>
      <br />
      <plus-portal target="#after" strategy="after">
        <h1 className="title">After the card</h1>
      </plus-portal>
      <plus-card outlined id="after">
        <plus-faker></plus-faker>
      </plus-card>
    </>
  );
};
export default PortalStrategy;
