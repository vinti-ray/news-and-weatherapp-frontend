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
          <p>Welcome to my application, where you can get the latest weather report, news, and access to a calendar all in one place.  </p>
          <p>We understand the importance of staying informed about the weather, which is why we provide up-to-date weather reports so that you can plan your day accordingly. Whether it's sunny, rainy, or snowy outside, you can rely on our application to keep you informed.</p>
<p>
In addition to weather reports, we also provide access to the latest news headlines, ensuring that you are always aware of current events. Our application gathers news from reliable sources, so you can trust that you are getting accurate and unbiased information.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
