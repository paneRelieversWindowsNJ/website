import React, { useEffect } from "react";
import MissionStatement from "../components/Home/MissionStatement";
import InstagramFeed from "../components/Home/Instagram";
import Gallery from "../components/Home/Gallery";
import Pic1 from "/public/PostCon1.jpg"; // Adjust the path as necessary
import Pic2 from "/public/PostCon2.jpg";
import Pic3 from "/public/BFResi1.jpg"; // Adjust the path as necessary
import Pic4 from "/public/BFResi2.jpg";
import ImageSection from "../components/Home/Image";

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
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
        ]}
      />
     <InstagramFeed/>
    </>
  );
};

export default HomePage;
