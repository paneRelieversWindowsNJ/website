import React from 'react';
import { FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-5" style={{ backgroundColor: '#008036' }}>
      <div className="container d-flex flex-column align-items-center">
        {/* Facebook */}
        <a 
          href="https://www.facebook.com/Basslines.Sportfishing.charters/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white text-dark px-4 py-2 rounded mb-4 text-decoration-none d-flex align-items-center"
          style={{ 
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#006b2e'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
        >
          <FaFacebook className="me-2" style={{ fontSize: '1.25rem' }} />
          Facebook
        </a>

        {/* Contact Phone Number */}
        <a 
          href="tel:+13476714181"
          className="fs-5 text-white text-decoration-none"
        >
          Contact Us: (347)-671-4181
        </a>
      </div>
    </footer>
  );
};

export default Footer;