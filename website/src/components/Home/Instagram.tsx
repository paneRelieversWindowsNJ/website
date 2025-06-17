import React from "react";
import LaikInWindow from "/public/laikInWindow.png"; // Adjust the path as necessary
import Crew2 from "/public/PaneLog.jpg";

const InstagramFeed: React.FC = () => {
  return (
    <div className="bg-light p-4 rounded d-flex flex-column flex-md-row align-items-center justify-content-center">
      <div className="text-center me-md-5 mb-4 mb-md-0">
        <p className="fs-5 fw-semibold mb-2">Check us out on Facebook</p>
        <p className="fw-bold mb-3">Follow us for more updates</p>
        <a
          href="https://www.facebook.com/p/Pane-Relievers-LLC-100089764040158/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn px-4 py-2 text-decoration-none text-white fw-bold"
          style={{ 
            backgroundColor: '#008036',
            transition: 'background-color 0.3s ease',
            border: 'none'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#006b2e'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#008036'}
        >
          Follow
        </a>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
        <img
          src={LaikInWindow}
          alt="Facebook Profile"
          className="img-fluid me-md-3 mb-3 mb-md-0"
          style={{ maxWidth: '250px', height: 'auto' }}
        />
        <img
          src={Crew2}
          alt="Facebook Profile"
          className="img-fluid"
          style={{ maxWidth: '250px', height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default InstagramFeed;