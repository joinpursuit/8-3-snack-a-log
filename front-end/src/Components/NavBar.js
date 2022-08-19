import React from "react";
import "../index.css";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <Navbar
      className="navbar"
      variant="dark"
      sticky="top"
      expand="md"
      collapseOnSelect
    >
      <Container>
        <Navbar.Toggle />
        <Navbar.Brand mb-0="true" h1="true" href="/snacks">
          <h1>Snacks</h1>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Button variant="outline-primary">
              <Nav.Link href="/snacks/new">
                <h5 href="/snacks/new">New Snack</h5>
              </Nav.Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
