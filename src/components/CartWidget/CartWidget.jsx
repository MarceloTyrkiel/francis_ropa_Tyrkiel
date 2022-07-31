import React from 'react'
import "./CartWidget.css"
import {Link} from "react-router-dom"

export default function CartWidget({img,carro}) {
  return (
      <Link to="/cart">
        <div className="color">
              <img id="carro"
                  alt=""
                  src="/carrito.png"
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                />{' '}
              {carro}
        </div>  
      </Link>
   )
}
