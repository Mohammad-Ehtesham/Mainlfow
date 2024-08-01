import { useState } from "react";
import BigImage from "../components/Big-image";
import SmallImage from "../components/Small-image";
import ImageList from "../components/Small-imagelist";
import "./App.css";

function App() {
  const [image, setimage] = useState({
    src: "../public/Image1.jpg",
    alt: "image1",
  });

  return (
    <>
      <div className="all-image">
        <BigImage comingImage={image} />

        <div className="multiple-image">
          <ImageList settingImage={setimage} GivenImage={image} />
          {/* <SmallImage settingImage={setimage} /> */}
        </div>
      </div>
    </>
  );
}

export default App;
