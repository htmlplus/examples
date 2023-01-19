import '@htmlplus/core/aspect-ratio.js';
const AspectRatioImage = () => {
  return (
    <plus-aspect-ratio value="18/6">
      <img
        src="http://placeimg.com/640/640/nature"
        style={{
          'object-fit': 'cover'
        }}
      />
    </plus-aspect-ratio>
  );
};
export default AspectRatioImage;
