import React from 'react'
import "./CartWidget.css"


export default function CartWidget({img,carro}) {
  return (
    <div>
       <img id="carro"
           alt=""
           src="/carrito.png"
           width="40"
           height="40"
           className="d-inline-block align-top"
           
       />{' '}
       {carro}
    </div>
  )
}
