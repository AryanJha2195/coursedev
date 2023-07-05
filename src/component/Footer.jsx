import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>MOOC Learning</h5>
            <p>6/62, MG street Bangalore, India</p>
          </Col>
          <Col md={6}>
            <h5>Contact</h5>
            <p>Email: MOOC@learnign.com</p>
            <p>Phone: +1 123 456 7890</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
