import { useState } from "react";
import SmallImage from "./Small-image";

const ImageList = ({ settingImage, GivenImage }) => {
  let ImageLists = [
    { img: "../public/Image1.jpg", alt: "image1" },
    { img: "../public/Image2.jpg", alt: "image2" },
    { img: "../public/Image3.jpg", alt: "image3" },
    { img: "../public/Image4.jpg", alt: "image4" },
    { img: "../public/Image5.jpg", alt: "image5" },
    { img: "https://wallpaperaccess.com/full/1293466.jpg", alt: "image6" },
    {
      img: "https://i.pinimg.com/originals/46/0a/27/460a271a3622669af190d8c0c63e2b6d.jpg",
      alt: "image7",
    },
  ];
  const [img, setimg] = useState("image1");

  let key = 0;
  let myVal = false;
  function imageclick(image) {
    console.log("Clicked on ", image.target);
    settingImage(image.target);
    setimg(image.target.alt);
    if (img === GivenImage.alt) {
      console.log(img);
      myVal = true;
    }
  }

  return ImageLists.map((items) => (
    <img
      src={items.img}
      key={key++}
      onMouseUp={imageclick}
      alt={items.alt}
      className={`${myVal ? "active" : "notActive"}`}
      // style={click ? { opacity: "1" } : { opacity: "0.5" }}
    />
  ));
};

export default ImageList;
