import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { FaBuilding, FaHome, FaTools } from "react-icons/fa";
import pic1 from "/public/PaneRelieversLLC.jpg";

const services = [
  {
    title: "Commercial Window Cleaning",
    icon: <FaBuilding size={40} className="text-green-600 mb-3" />,
    description: (
      <>
        We are proud to provide commercial window cleaning services in New Jersey’s Monmouth and Ocean Counties.
        If you own, rent, or manage a commercial property with dirty glass, we are here to serve you. <br /><br />
        From storefronts, restaurants, showrooms, offices and more—we provide reliable services at affordable prices.
        Clean windows are essential for maintaining your business’s image. <br /><br />
        🗓️ Monthly service is recommended for storefronts and restaurants. <br />
        🏢 Quarterly or biannual for larger buildings like offices or medical centers.
      </>
    ),
  },
  {
    title: "Residential Window Cleaning",
    icon: <FaHome size={40} className="text-green-600 mb-3" />,
    description: (
      <>
        Clean windows help your home look beautiful, improve insulation, and increase natural light—saving energy and money. <br /><br />
        Dirty windows can also harbor allergens and mold. We recommend at least an annual cleaning. <br /><br />
        🏡 We service homes across Monmouth, Ocean, Middlesex, Mercer, and Burlington Counties. <br />
        🪟 We clean casements, double hung, skylights, and more (excluding storm windows). <br />
        🧽 Full service includes sills, sashes, tracks, and screens. Yes, we do roofs and skylights!
      </>
    ),
  },
  {
    title: "Post Construction Window Cleaning",
    icon: <FaTools size={40} className="text-green-600 mb-3" />,
    description: (
      <>
        Just completed a renovation? We’re here to help with post-construction window cleanup! <br /><br />
        🧼 We remove dried paint, plaster, and heavy debris with care and precision. <br />
        🏗️ For both residential and commercial projects.
      </>
    ),
  },
];

const Services: React.FC = () => {
  return (
    <>
      <div className="bg-green-400 py-12 pb-5 mb-3 pt-3"style={{ backgroundColor: '#008036' }} >
        <Container>
          <h2 className="text-center text-4xl font-bold text-white mb-10">Our Services</h2>
          <Row xs={1} md={2} lg={3} className="g-4">
            {services.map((service, index) => (
              <Col key={index}>
                <Card className="h-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Card.Body className="text-center p-4">
                    {service.icon}
                    <Card.Title className="text-2xl font-semibold mb-3 text-green-800">{service.title}</Card.Title>
                    <Card.Text className="text-gray-700 text-left whitespace-pre-line">{service.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* New Centered Image Section */}
      <div className="bg-white py-12">
        <Container className="d-flex justify-content-center">
          <img
            src={pic1} // <-- Replace this URL with your image source
            alt="Centered display"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Container>
      </div>
    </>
  );
};

export default Services;
