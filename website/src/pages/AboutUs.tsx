import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { FaUserTie, FaHandsHelping, FaStar } from "react-icons/fa";
import Pic1 from "/public/LaikGreen.jpg";
import Pic2 from "/public/DirtyWindows.jpg";
import Pic3 from "/public/NJdirtyWindows.jpg";

const aboutItems = [
  {
    title: "Founder & Owner",
    icon: <FaUserTie size={40} className="text-green-600 mb-3" />,
    description: (
      <>
        Laik J. Green founded Pane Relievers in December of 2022.
        <br />
        He takes immense pride in being a window cleaner.
      </>
    ),
  },
  {
    title: "Personalized Service",
    icon: <FaHandsHelping size={40} className="text-green-600 mb-3" />,
    description: (
      <>
        Tired of big franchises or high-volume companies?
        <br />
        As an owner operator, Laik personally provides his experienced services
        for every job.
      </>
    ),
  },
  {
    title: "Our Promise",
    icon: <FaStar size={40} className="text-green-600 mb-3" />,
    description: (
      <>
        "It is hard to find good people in today's world.
        <br />
        Even harder to find those trustworthy, skilled, and proud of their
        work." <br />
        <br />
        If you want personable, honest, reliable, and professional services,
        call Pane Relievers.
        <br />
        You won't regret it.
      </>
    ),
  },
];

const AboutUs: React.FC = () => {
  return (
    <>
      <div
        className="bg-green-700 py-12 mb-3 pb-3 pt-3"
        style={{ backgroundColor: "#008036" }}
      >
        <Container>
          <h2 className="text-center text-4xl font-bold text-white mb-10">
            About Us
          </h2>
          <Row xs={1} md={2} lg={3} className="g-4">
            {aboutItems.map((item, index) => (
              <Col key={index}>
                <Card className="h-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Card.Body className="text-center p-4">
                    {item.icon}
                    <Card.Title className="text-2xl font-semibold mb-3 text-black">
                      {item.title}
                    </Card.Title>
                    <Card.Text className="text-black text-left whitespace-pre-line">
                      {item.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Centered Image Section */}
      <div className="bg-white py-12 pb-4">
        <Container>
          <Row className="justify-content-center mb-4">
            <Col xs={8} md={4} className="d-flex justify-content-center">
              <img
                src={Pic1} // Replace with your image path
                alt="Top image"
                className="img-fluid rounded shadow"
                style={{ maxHeight: 250 }}
              />
            </Col>
          </Row>
          <Row className="justify-content-center gap-4">
            <Col xs={5} md={3} className="d-flex justify-content-center">
              <img
                src={Pic2} // Replace with your image path
                alt="Bottom left image"
                className="img-fluid rounded shadow"
                style={{ maxHeight: 250 }}
              />
            </Col>
            <Col xs={5} md={3} className="d-flex justify-content-center">
              <img
                src={Pic3} // Replace with your image path
                alt="Bottom right image"
                className="img-fluid rounded shadow"
                style={{ maxHeight: 250 }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutUs;
