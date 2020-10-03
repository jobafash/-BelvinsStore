import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3"> Copyright &copy; Belvins </Col>
          <Col className="text-right py-3"> Contact: 08012345678 </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
