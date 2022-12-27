import { AspectRatio } from '@htmlplus/react';
const AspectRatioImage = () => {
  return (
    <AspectRatio value="18/6">
      <img
        src="http://placeimg.com/640/640/nature"
        style={{
          'object-fit': 'cover'
        }}
      />
    </AspectRatio>
  );
};
export default AspectRatioImage;
