import imageSource from "/ProfessionalWindowCleaningNJ.jpg"; // Importing the image file

const ImageSection = () => {
  return (
    <div
      className="position-relative d-flex justify-content-center align-items-center"
      style={{ height: "30rem", backgroundColor: "#008036"}} // set desired height here
    >
      <div
        className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
        style={{ top: 0, left: 0 }}
      >
        <img
          className="position-absolute w-100 h-100"
          style={{ height: "100%", objectFit: "contain", top: 0, left: 0 }}
          src={imageSource}
          alt="DirtyWindowsNJ"
        />
      </div>
    </div>
  );
};

export default ImageSection;
