const BigImage = ({ comingImage }) => {
  return (
    <div className="full-image">
      <img src={comingImage.src} alt={comingImage.alt} />
    </div>
  );
};

export default BigImage;
