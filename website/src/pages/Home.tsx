import React, { useEffect } from "react";
import MissionStatement from "../components/Home/MissionStatement";
import InstagramFeed from "../components/Home/Instagram";
import Gallery from "../components/Home/Gallery";
import Pic1 from "/public/PostCon1.jpg"; 
import Pic2 from "/public/PostCon2.jpg";
import Pic3 from "/public/BFResi1.jpg"; 
import Pic4 from "/public/BFResi2.jpg";
import Pic5 from "/public/BFCom1.jpg"; 
import Pic6 from "/public/BFCom2.jpg"; 
import Pic7 from "/public/BFCom3.jpg"; 
import Pic8 from "/public/BFCom4.jpg"; 
import Pic9 from "/public/BFResi4.jpg"; 
import Pic10 from "/public/BFResi5.jpg"; 
import ImageSection from "../components/Home/Image";

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <>
    <ImageSection />
     <MissionStatement />
     <Gallery
        images={[
            Pic1,
            Pic2,
            Pic3,
            Pic4,
            Pic5,
            Pic6,
            Pic7,
            Pic8,
            Pic9,
            Pic10
        ]}
      />
     <InstagramFeed/>
    </>
  );
};

export default HomePage;
