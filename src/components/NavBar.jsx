import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav,Container} from "react-bootstrap" 

export default function NavBar() {
  return (
    <div >
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container >
              <Navbar.Brand href="#home"  className="justify-content-end">
                    <img
                      alt=""
                      src="/mujer.png"
                      width="40"
                      height="40"
                      className="d-inline-block align-top"
                    />{' '}
                    FRANCIS 
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse  id="responsive-navbar-nav" className="justify-content-center "  >
                <Nav className="mb-lg-0">
                        <Nav.Link href="#features">Body</Nav.Link>
                        <Nav.Link href="#pricing">Conjunto ropa interior</Nav.Link>
                        <Nav.Link href="#pricing">Corpino</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <Navbar.Collapse className="justify-content-end">
                    < Navbar.Text>
                          Desarrollado por: <a href="#login">Marcelo Tyrkiel</a>
                    </Navbar.Text>
              </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
}

