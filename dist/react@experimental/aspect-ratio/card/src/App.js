import '@htmlplus/core/aspect-ratio.js';
import '@htmlplus/core/card.js';
import '@htmlplus/core/card-body.js';
import '@htmlplus/core/center.js';
const AspectRatioCard = () => {
  return (
    <plus-center>
      <plus-card outlined>
        <plus-card-body>
          <plus-aspect-ratio value="16/9">
            <div className="placeholder"></div>
          </plus-aspect-ratio>
          <h3>Title</h3>
          <p>Description of the card.</p>
        </plus-card-body>
      </plus-card>
    </plus-center>
  );
};
export default AspectRatioCard;
