import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav,Container} from "react-bootstrap" 
import CartWidget from "../CartWidget/CartWidget";
import {Link} from "react-router-dom"
import  "./NavBar.css"

export default function NavBar() {
  return (
    <div >
      <>
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
              
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
                    <Nav className="mb-lg-2  bg-secondary width-40 ">
                            <Link id="Home" to={"/"} >Home </Link>
                            <Link id="menu_body" to={"/category/Body"} >Bodies </Link>
                            <Link id="menu_conjunto" to={"/category/Conjunto"} >Conjuntos </Link>
                            <Link id="menu_corpiño" to={"/category/Corpiño"} >Corpiños</Link> 
                            <Link id="menu_bombacha" to={"/category/Mallas"} >Trajes de baño </Link>
                    </Nav>
                  </Navbar.Collapse>
                  <Navbar.Collapse className="justify-content-end">
                  <Navbar.Brand   className="justify-content-end">
                        <CartWidget carro="9"/>
                  </Navbar.Brand> 
                  </Navbar.Collapse>
              
            </Navbar>
          
        </Container>
      </>
     </div>
  );
}

// <ItemListContainer saludo="GREETINGS"/>