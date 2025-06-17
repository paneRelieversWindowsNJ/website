import React from "react";
import Carousel from "react-bootstrap/Carousel";

const ImageCarousel: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <div style={{ backgroundColor: '#e5e7eb', padding: '1.5rem 0' }}>
      <div className="d-flex justify-content-center mb-4">
        <div style={{ maxWidth: '1200px', width: '100%' }}>
          <Carousel fade interval={3000} controls={true} indicators={true}>
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 rounded"
                  src={image}
                  alt={`Slide ${index + 1}`}
                  style={{ 
                    height: '600px', 
                    objectFit: 'contain',
                    backgroundColor: '#f8f9fa'
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
      
      <div className="d-flex justify-content-center mt-4 mb-4">
        <div className="text-center" style={{ maxWidth: '800px' }}>
          <p className="fs-5 text-muted px-3">
            Experience the beauty of our pristine waters and professional crew. 
            Our state-of-the-art vessel provides the perfect platform for unforgettable maritime adventures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;