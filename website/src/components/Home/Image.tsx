import imageSource from "/insert.png"; // Importing the image file

const ImageSection = () => {
  return (
    <div className="position-relative bg-dark d-flex justify-content-center align-items-center" style={{height: '24rem'}}>
      <div className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center" style={{top: 0, left: 0}}>
        <img
          className="position-absolute w-100 h-100" 
          style={{height: '800px', objectFit: 'cover', top: 0, left: 0}}
          src={imageSource}
          alt="BassLines Sport Fishing"
        />
      </div>
      <div className="position-absolute text-white" style={{left: '1.5rem'}}>
        <h1 className="display-4 fw-bold">Pane Relievers</h1>
        <p className="fs-5">Monmouth County Commerical Window Washing</p>
      </div>
    </div>
  );
};

export default ImageSection;