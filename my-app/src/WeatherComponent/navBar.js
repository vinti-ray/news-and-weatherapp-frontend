// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useState } from 'react';
function HomeNav() {

  return (
    <>
      <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="/">Weather</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/calendar">Calender</Nav.Link>
            <Nav.Link href="/about">About Me</Nav.Link>
          </Nav>


        </Container>
      </Navbar>
    
    </>
  );
}

export default HomeNav;