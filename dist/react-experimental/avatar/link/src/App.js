import '@htmlplus/core/avatar.js';
const AvatarLink = () => {
  return (
    <div className="center">
      <plus-avatar>
        <img src="https://picsum.photos/id/177/90/90" />
        <a href="https://picsum.photos/id/177/90/90" target="_blank"></a>
      </plus-avatar>
    </div>
  );
};
export default AvatarLink;
