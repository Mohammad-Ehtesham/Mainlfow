const SmallImage = ({ settingImage }) => {
  return (
    <>
      {/* <img src={image} onClick={console.log("I'm clicked")} /> */}
      <img
        src="../public/Image1.jpg"
        onClick={console.log("I'm clicked img1")}
      />
      <img
        src="../public/Image2.jpg"
        onClick={console.log("I'm clicked img2")}
      />
      <img
        src="../public/Image3.jpg"
        onClick={console.log("I'm clicked img3")}
      />
      <img
        src="../public/Image4.jpg"
        onClick={console.log("I'm clicked img4")}
      />
      <img
        src="../public/Image5.jpg"
        onClick={console.log("I'm clicked img5")}
      />
    </>
  );
};

export default SmallImage;
