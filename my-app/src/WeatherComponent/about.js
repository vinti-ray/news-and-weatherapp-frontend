import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function About() {
  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>About Us</h1>
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={6}>
          <Image src="https://th.bing.com/th/id/OIP.su6VVPyYSAHY8NzrwDM-CAHaEf?pid=ImgDet&rs=1" fluid />
        </Col>
        <Col md={6}>
          <p>Hello I'm new to this developement world and trying to create some kickass project </p>
          <p>Feel free to render here</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
