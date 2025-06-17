import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "/Logo.jpg"; 

const NavBar: React.FC = () => {
  const linkStyle = {
    color: 'black',
    fontWeight: 'bold',
    padding: '8px 12px',
    borderRadius: '6px',
    transition: 'background-color 0.2s ease'
  };

  return (
    <Navbar bg="white" variant="light" expand="md" className="pb-0">
      <div className="d-flex align-items-end">
        <img src={logo} alt="Logo" style={{ height: '140px' }} />
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto me-4">
          <Nav.Link 
            href="/" 
            style={linkStyle}
            onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#f8f9fa'}
            onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.backgroundColor = 'transparent')}
          >
            Home
          </Nav.Link>
          <Nav.Link 
            href="/AboutUs" 
            style={linkStyle}
            onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#f8f9fa'}
            onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.backgroundColor = 'transparent')}
          >
            Services
          </Nav.Link>
          <Nav.Link 
            href="/Crew" 
            style={linkStyle}
            onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#f8f9fa'}
            onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.backgroundColor = 'transparent')}
          >
            About Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;