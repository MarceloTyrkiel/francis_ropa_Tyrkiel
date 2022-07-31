import React, {useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav,Container} from "react-bootstrap" 
import CartWidget from "../CartWidget/CartWidget";
import {Link} from "react-router-dom"
import  "./NavBar.css"
import { CartContext } from "../../Context/CartContext";

export default function NavBar() {
  const{cart} = useContext(CartContext);
  return (
    <div >
      <>
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark" className="d-flex justify-content-space-between">
              <div>
              <Link to="/">
                  <Navbar.Brand href=""  className="justify-content-end">
                        <img
                          alt=""
                          src="/mujer.png"
                          width="40"
                          height="40"
                          className="d-inline-block align-top"
                        />{' '}
                        FRANCIS 
                  </Navbar.Brand>
                </Link>
                </div>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse  id="responsive-navbar-nav" className="justify-content-center "  >
                    <Nav className="mb-lg-2  bg-secondary width-40 ">
                            <Link id="Home" to={"/"} >Home </Link>
                            <Link id="menu_body" to={"/category/Body"} >Bodies </Link>
                            <Link id="menu_conjunto" to={"/category/Conjuntos"} >Conjuntos </Link>
                            <Link id="menu_corpiño" to={"/category/Corpiño"} >Corpiños</Link> 
                            <Link id="menu_bombacha" to={"/category/Boxer"} >Hombre </Link>
                    </Nav>
                  </Navbar.Collapse>
                  <Navbar.Collapse className="justify-content-end">

                  <Navbar.Brand   className="justify-content-end numero">
                        <CartWidget carro={!!cart.length && <span>{cart.reduce((p,c)=> p + c.auxStock,0)}</span>}/>
                  </Navbar.Brand> 
                  
                  </Navbar.Collapse>
              
            </Navbar>
          
        </Container>
      </>
     </div>
  );
}

