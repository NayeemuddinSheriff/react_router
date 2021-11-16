import React from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";


export default function Navigationbar() {

    return (
      <>
      <Router>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand>React_Router</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Topics">Topics</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      </Router>
    </>
    )
}